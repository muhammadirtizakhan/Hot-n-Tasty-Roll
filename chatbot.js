/* ================================================================
   HOT N TASTY ROLL - AI CHATBOT with GROQ API
   Uses GROQ LLM to understand user queries and respond from training data
   API Key should be set in Vercel Environment Variables
================================================================ */

// ================================================================
// GROQ API CONFIGURATION
// ================================================================
// Get your FREE API key from: https://console.groq.com
// Set as environment variable: GROQ_API_KEY (in Vercel/Netlify/.env)
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Get API key from environment (Vercel serverless) or window
let GROQ_API_KEY = '';

// Try to get from process.env (Node.js server)
if (typeof process !== 'undefined' && process.env && process.env.GROQ_API_KEY) {
    GROQ_API_KEY = process.env.GROQ_API_KEY;
}
// Try to get from window (browser fallback)
else if (typeof window !== 'undefined' && window.GROQ_API_KEY) {
    GROQ_API_KEY = window.GROQ_API_KEY;
}

// Check if API key is configured
if (!GROQ_API_KEY) {
    console.warn('⚠️ GROQ API key not configured. Set GROQ_API_KEY in environment variables.');
    console.warn('Get a free key from: https://console.groq.com');
}

// ================================================================
// CHATBOT STATE
// ================================================================
let isProcessing = false;
let conversationHistory = [];
let KNOWLEDGE_BASE = null;

// ================================================================
// LOAD TRAINING DATA
// ================================================================
try {
    if (typeof CHATBOT_DATA !== 'undefined') {
        KNOWLEDGE_BASE = CHATBOT_DATA;
        console.log('✅ Chatbot training data loaded successfully');
    } else {
        console.warn('CHATBOT_DATA not found, using fallback');
    }
} catch (e) {
    console.error('Error loading training data:', e);
}

// ================================================================
// SEARCH IN KNOWLEDGE BASE (Fallback if API fails)
// ================================================================
function searchInKnowledgeBase(userQuery) {
    if (!KNOWLEDGE_BASE) {
        return ["I'm ready to help! What would you like to know about our menu?"];
    }
    
    const query = userQuery.toLowerCase();
    let responses = [];
    
    // Check FAQs
    if (KNOWLEDGE_BASE.faqs) {
        for (const faq of KNOWLEDGE_BASE.faqs) {
            const matches = faq.keywords && faq.keywords.some(keyword => query.includes(keyword));
            if (matches || query.includes(faq.question.toLowerCase())) {
                responses.push(faq.answer);
                break;
            }
        }
    }
    
    // Check price queries
    if (query.includes('price') || query.includes('cost') || query.includes('rate') || query.includes('kitne')) {
        for (const [category, data] of Object.entries(KNOWLEDGE_BASE.menu || {})) {
            for (const item of data.items) {
                if (query.includes(item.name.toLowerCase()) || query.includes(item.name.toLowerCase().substring(0, 10))) {
                    responses.push(`${item.name} costs Rs. ${item.price}. It's from our ${category} category.`);
                }
            }
        }
    }
    
    // Check for specific rolls
    if (query.includes('roll') && responses.length === 0) {
        const rolls = [];
        for (const [category, data] of Object.entries(KNOWLEDGE_BASE.menu || {})) {
            if (category.includes('ROLL')) {
                for (const item of data.items.slice(0, 3)) {
                    rolls.push(`${item.name} (Rs. ${item.price})`);
                }
            }
        }
        if (rolls.length) {
            responses.push(`We have many delicious rolls! Here are some: ${rolls.join(', ')}. Would you like the full list?`);
        }
    }
    
    // Check deals
    if ((query.includes('deal') || query.includes('offer') || query.includes('combo')) && responses.length === 0) {
        const deals = KNOWLEDGE_BASE.deals || [];
        const bestDeals = deals.filter(d => d.bestseller).slice(0, 3);
        for (const deal of bestDeals) {
            responses.push(`${deal.name}: Rs. ${deal.price} (Save Rs. ${deal.savings}). Includes: ${deal.items.join(', ')}`);
        }
    }
    
    // Check timings
    if ((query.includes('time') || query.includes('hour') || query.includes('open') || query.includes('close')) && responses.length === 0) {
        responses.push(`⏰ Our timings: Monday-Thursday 11 AM-11 PM, Friday 12 PM-11:30 PM, Weekends 11 AM-12 AM. Delivery until 10:30 PM.`);
    }
    
    // Check location
    if ((query.includes('where') || query.includes('location') || query.includes('address')) && responses.length === 0) {
        responses.push(`📍 Our address: ${KNOWLEDGE_BASE.location?.full_address || 'Shop #9, Malir 15, Muhabbat Nagar, Karachi'}`);
    }
    
    // Check contact
    if ((query.includes('contact') || query.includes('phone') || query.includes('number')) && responses.length === 0) {
        const contact = KNOWLEDGE_BASE.contact;
        responses.push(`📞 Contact us: ${contact.phone_numbers?.[0]?.number || '0318-2370631'} | WhatsApp: ${contact.whatsapp?.number || '0341-3139107'}`);
    }
    
    // Check popular items
    if ((query.includes('popular') || query.includes('best') || query.includes('famous')) && responses.length === 0) {
        const popular = KNOWLEDGE_BASE.popular_items || [];
        for (const item of popular.slice(0, 3)) {
            responses.push(`• ${item.name} (Rs. ${item.price}) - ${item.category}`);
        }
    }
    
    // Greeting response
    if ((query.includes('hi') || query.includes('hello') || query.includes('salam')) && responses.length === 0) {
        responses.push(`Assalam-o-Alaikum! 👋 Welcome to Hot N Tasty Roll! How can I help you today? You can ask about our menu, prices, deals, delivery, or location.`);
    }
    
    // Default response
    if (responses.length === 0) {
        responses.push(`I'm here to help! 🍽️\n\nYou can ask me about:\n• Menu & Prices (e.g., "Price of Zinger Burger")\n• Deals & Offers\n• Delivery & Timings\n• Location & Contact\n• Popular Dishes\n\nWhat would you like to know?`);
    }
    
    return responses;
}

// ================================================================
// CALL GROQ API FOR INTELLIGENT RESPONSE
// ================================================================
async function getAIResponse(userMessage) {
    // If no API key, use local search
    if (!GROQ_API_KEY) {
        console.log('Using local search (no API key configured)');
        return searchInKnowledgeBase(userMessage);
    }
    
    try {
        // Prepare knowledge base summary for API
        const menuSummary = Object.keys(KNOWLEDGE_BASE?.menu || {}).slice(0, 10).join(', ');
        const dealsSummary = KNOWLEDGE_BASE?.deals?.map(d => `${d.name}: Rs.${d.price}`).join(', ') || '';
        const contactInfo = `${KNOWLEDGE_BASE?.contact?.phone_numbers?.[0]?.number || '0318-2370631'}, WhatsApp: ${KNOWLEDGE_BASE?.contact?.whatsapp?.number || '0341-3139107'}`;
        
        const systemPrompt = `You are an AI assistant for "Hot N Tasty Roll" restaurant in Karachi.

KNOWLEDGE:
- Menu Categories: ${menuSummary}
- Deals: ${dealsSummary}
- Location: ${KNOWLEDGE_BASE?.location?.full_address || 'Malir 15, Karachi'}
- Contact: ${contactInfo}
- Timings: Mon-Thu 11AM-11PM, Fri 12PM-11:30PM, Sat-Sun 11AM-12AM
- Delivery: 30-45 min, Min order Rs.300, Free delivery above Rs.1500

RULES:
1. Answer only about this restaurant
2. Be friendly and helpful in Urdu or English
3. Keep responses short (2-3 sentences)
4. For prices, give exact amount
5. If question is unrelated, politely say you can only help with restaurant queries

User question: ${userMessage}`;

        // Add to conversation history
        conversationHistory.push({ role: "user", content: userMessage });
        if (conversationHistory.length > 10) conversationHistory = conversationHistory.slice(-10);
        
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: "system", content: systemPrompt },
                    ...conversationHistory
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        conversationHistory.push({ role: "assistant", content: aiResponse });
        
        return [aiResponse];
        
    } catch (error) {
        console.error('GROQ API Error:', error);
        return searchInKnowledgeBase(userMessage);
    }
}

// ================================================================
// GET GREETING MESSAGE
// ================================================================
function getChatbotGreeting() {
    return `Welcome to Hot N Tasty Roll! 🍽️

I'm your AI assistant. I can help you with:
• Menu & Prices
• Deals & Offers  
• Delivery Info
• Location & Timings

What would you like to know?`;
}

// ================================================================
// SEND MESSAGE FUNCTION (Called from UI)
// ================================================================
async function sendChatbotMessage(message) {
    if (isProcessing) return "Please wait, I'm processing your previous message...";
    
    isProcessing = true;
    try {
        const responses = await getAIResponse(message);
        isProcessing = false;
        return responses[0];
    } catch (error) {
        isProcessing = false;
        return "Sorry, I'm having trouble connecting. Please contact us directly at 0318-2370631.";
    }
}

// ================================================================
// EXPOSE FUNCTIONS GLOBALLY
// ================================================================
window.getAIResponse = getAIResponse;
window.searchInKnowledgeBase = searchInKnowledgeBase;
window.getChatbotGreeting = getChatbotGreeting;
window.sendChatbotMessage = sendChatbotMessage;

console.log('🤖 Chatbot AI module loaded successfully!');