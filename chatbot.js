/* ================================================================
   HOT N TASTY ROLL - KILLER AI CHATBOT ENGINE v3.0
   Powered by GROQ (llama-3.3-70b-versatile)
   Features:
   - Full restaurant knowledge injected into every prompt
   - Handles general questions (not just restaurant)
   - Smart intent detection before API call
   - Conversation memory (last 12 messages)
   - Typing indicators with realistic delays
   - Bilingual support (Urdu + English)
   - Graceful fallback with smart local search
================================================================ */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
let GROQ_API_KEY = '';
let isProcessing = false;
let conversationHistory = [];
let KNOWLEDGE_BASE = null;
let sessionContext = { lastCategory: null, lastItem: null, userName: null };

// ================================================================
// LOAD API KEY FROM SERVER
// ================================================================
async function loadApiKey() {
    try {
        const res = await fetch('/api/config');
        const data = await res.json();
        if (data.groqApiKey) {
            GROQ_API_KEY = data.groqApiKey;
            console.log('✅ GROQ API key loaded from server');
        } else {
            console.warn('⚠️ GROQ API key not configured.');
        }
    } catch (e) {
        console.warn('⚠️ Could not load API key:', e);
    }
}

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
// BUILD RICH SYSTEM PROMPT (Full data injected)
// ================================================================
function buildSystemPrompt() {
    if (!KNOWLEDGE_BASE) {
        return buildFallbackSystemPrompt();
    }

    // Build complete menu string
    let fullMenu = '';
    for (const [category, data] of Object.entries(KNOWLEDGE_BASE.menu || {})) {
        fullMenu += `\n[${category}]\n`;
        for (const item of data.items) {
            fullMenu += `  - ${item.name}: Rs.${item.price}`;
            if (item.description) fullMenu += ` | ${item.description}`;
            if (item.spice) fullMenu += ` | Spice: ${item.spice}`;
            if (item.bestseller) fullMenu += ` | ⭐ BESTSELLER`;
            if (item.cheese) fullMenu += ` | Has Cheese`;
            if (item.vegetarian) fullMenu += ` | VEGETARIAN`;
            fullMenu += '\n';
        }
    }

    // Build deals string
    let dealsStr = '';
    for (const deal of (KNOWLEDGE_BASE.deals || [])) {
        dealsStr += `\n  - ${deal.name}: Rs.${deal.price} (Save Rs.${deal.savings} | ${deal.discount_percent}% OFF)`;
        dealsStr += `\n    Includes: ${deal.items.join(', ')}`;
        if (deal.serves) dealsStr += ` | Serves: ${deal.serves}`;
        if (deal.bestseller) dealsStr += ` | ⭐ BESTSELLER`;
        dealsStr += '\n';
    }

    // Build FAQ string
    let faqStr = '';
    for (const faq of (KNOWLEDGE_BASE.faqs || [])) {
        faqStr += `\nQ: ${faq.question}\nA: ${faq.answer}\n`;
    }

    // Build timings string
    const t = KNOWLEDGE_BASE.timings || {};
    const timingsStr = `
Monday-Thursday: 11:00 AM - 11:00 PM
Friday: 12:00 PM - 11:30 PM (Friday prayers break 1PM-2PM)
Saturday-Sunday: 11:00 AM - 12:00 AM (Midnight)
Delivery: Available until 10:30 PM (last order 10:15 PM)
Kitchen closes: 10:45 PM
Holiday note: Open all holidays except 1st day of Eid ul Fitr and Eid ul Adha`;

    // Build delivery string
    const d = KNOWLEDGE_BASE.delivery || {};
    const deliveryStr = `
Delivery time: 30-45 minutes
Minimum order: Rs. 300
Free delivery: On orders above Rs. 1,500
Delivery charges: Rs.80 (within 5km), Rs.120 (within 10km), Rs.150 (above 10km)
Platforms: Foodpanda, In-house delivery, WhatsApp orders
Payment: Cash on Delivery, Card, JazzCash, EasyPaisa
Delivery areas: Malir, Gulshan-e-Hadeed, Airport, Shah Faisal, Korangi, Landhi, Saddar, Clifton, DHA, North Karachi, Gulberg, Johar, Bahadurabad, PECHS, Tariq Road, Gulistan-e-Johar`;

    return `You are "Tasty", the brilliant AI assistant for "Hot N Tasty Roll" — a premium fast food restaurant in Malir 15, Karachi, Pakistan.

Your personality:
- Warm, friendly, and enthusiastic about food
- Bilingual: respond in the same language the user writes in (Urdu or English)
- Use relevant food emojis naturally but not excessively
- Be conversational, not robotic
- You have a slight desi personality — you can use phrases like "bilkul", "zaroor", "bhai", when speaking Urdu

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESTAURANT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Hot N Tasty Roll
Address: Shop #9, Malir 15, Muhabbat Nagar, Karachi
Landmark: Near Muhabbat Nagar Chowk
Phone: 0318-2370631, 0320-3742455
WhatsApp: 0341-3139107
Instagram: @hotntastyroll
Facebook: Hot N Tasty Roll
Established: 2020
Specialties: Signature Rolls, BBQ, Zinger Burgers, Malai Boti, Chicken Tikka
Dine-in: Yes (seats up to 30, air-conditioned)
Takeaway: Yes
Payment: Cash, Card, JazzCash, EasyPaisa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIMINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${timingsStr}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELIVERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${deliveryStr}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLETE MENU (with prices in Pakistani Rupees)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${fullMenu}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEALS & OFFERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${dealsStr}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FREQUENTLY ASKED QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${faqStr}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESTAURANT QUESTIONS:
1. Always give EXACT prices from the menu above — never approximate or say "around Rs.X"
2. When asked for recommendations, suggest bestsellers and ask about their preferences (spice level, budget, group size)
3. For deals, always mention savings and what's included
4. If someone mentions a budget (e.g., "I have Rs. 500"), suggest the best combinations within that budget
5. For group orders, suggest family deals or party platters
6. Always end restaurant answers with a helpful follow-up question or offer

GENERAL QUESTIONS (Non-restaurant):
7. You CAN answer general knowledge questions, general conversation, and helpful queries
8. For general questions, be helpful and intelligent — use your full LLM capabilities
9. After answering a general question, smoothly bring the conversation back to food if natural
10. Examples of general you SHOULD answer: weather questions, general cooking tips, recipe ideas, general advice, fun facts, math questions, language help, etc.

THINGS TO NEVER DO:
- Never make up prices not in the menu
- Never promise delivery times shorter than 30 minutes
- Never say you don't know something that's in the menu above
- Never be rude or dismissive
- Never give medical or legal advice

RESPONSE FORMAT:
- Keep restaurant answers concise but complete (3-5 sentences max unless listing menu items)
- Use bullet points for lists of items
- Use bold sparingly only for prices and item names
- For general questions, respond naturally without bullet points unless listing something
- Always be ready to help further`;
}

function buildFallbackSystemPrompt() {
    return `You are "Tasty", the AI assistant for Hot N Tasty Roll restaurant in Malir 15, Karachi.
Restaurant details: Phone 0318-2370631, WhatsApp 0341-3139107.
Hours: Mon-Thu 11AM-11PM, Fri 12PM-11:30PM, Sat-Sun 11AM-12AM.
Delivery: 30-45 min, min order Rs.300, free above Rs.1500.
You can also help with general questions outside of restaurant topics.
Be friendly, bilingual (Urdu/English), and helpful.`;
}

// ================================================================
// SMART INTENT DETECTION (Pre-API classification)
// ================================================================
function detectIntent(message) {
    const msg = message.toLowerCase().trim();

    const intents = {
        greeting: ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa', 'good morning', 'good evening', 'sup', 'hola'],
        price: ['price', 'cost', 'rate', 'kitne', 'kitna', 'how much', 'qemat', 'daam', 'paisa', 'rupee', 'rs'],
        menu: ['menu', 'what do you have', 'kya hai', 'items', 'dishes', 'categories', 'food', 'kha sakte', 'khana'],
        deal: ['deal', 'offer', 'combo', 'discount', 'saving', 'cheap', 'family pack', 'sasta', 'promotion'],
        delivery: ['delivery', 'deliver', 'ghar', 'home', 'send', 'bhejo', 'pahuncha'],
        timing: ['timing', 'hours', 'open', 'close', 'kab', 'kitne baje', 'time', 'schedule'],
        location: ['location', 'address', 'where', 'kahan', 'pata', 'malir', 'directions', 'maps'],
        contact: ['contact', 'phone', 'number', 'call', 'whatsapp', 'mobile'],
        popular: ['popular', 'best', 'famous', 'recommend', 'suggest', 'top', 'acha', 'favorite'],
        vegetarian: ['vegetarian', 'veg', 'without meat', 'no chicken', 'no beef', 'plant'],
        spicy: ['spicy', 'teekha', 'hot food', 'masaledar', 'mild', 'not spicy'],
        order: ['order', 'buy', 'purchase', 'lena hai', 'mangwana', 'book'],
        farewell: ['bye', 'goodbye', 'khuda hafiz', 'allah hafiz', 'tata', 'see you', 'cya'],
        thanks: ['thank', 'shukriya', 'thanks', 'appreciate', 'jazakallah', 'shukria'],
        complaint: ['bad', 'worst', 'terrible', 'wrong', 'late', 'cold food', 'issue', 'problem', 'complaint'],
        general: ['what is', 'how to', 'can you', 'tell me', 'explain', 'help me', 'weather', 'news', 'fact', 'joke']
    };

    for (const [intent, patterns] of Object.entries(intents)) {
        if (patterns.some(p => msg.includes(p))) {
            return intent;
        }
    }
    return 'unknown';
}

// ================================================================
// LOCAL KNOWLEDGE BASE SEARCH (Fallback when API unavailable)
// ================================================================
function searchInKnowledgeBase(userQuery) {
    if (!KNOWLEDGE_BASE) {
        return "I'm here to help! Ask me about our menu, prices, deals, delivery, or location. 🍽️";
    }

    const query = userQuery.toLowerCase();
    const intent = detectIntent(userQuery);

    // Greeting
    if (intent === 'greeting') {
        return `Assalam-o-Alaikum! 👋 Welcome to Hot N Tasty Roll!\n\nI can help you with:\n🍽️ Menu & Prices\n🔥 Deals & Offers\n🚚 Delivery Info\n📍 Location & Timings\n\nWhat would you like to know?`;
    }

    // Farewell
    if (intent === 'farewell') {
        return `Khuda Hafiz! 👋 Thanks for visiting Hot N Tasty Roll! Come back soon or order online. Have a delicious day! 🍽️`;
    }

    // Thanks
    if (intent === 'thanks') {
        return `You're most welcome! 😊 Is there anything else I can help you with?`;
    }

    // Timing
    if (intent === 'timing') {
        return `⏰ Our timings:\n• Mon-Thu: 11 AM - 11 PM\n• Friday: 12 PM - 11:30 PM\n• Sat-Sun: 11 AM - 12 AM (Midnight)\n• Delivery until 10:30 PM\n\nWe're open on public holidays! Closed only on 1st day of both Eids.`;
    }

    // Location
    if (intent === 'location') {
        return `📍 Hot N Tasty Roll\nShop #9, Malir 15, Muhabbat Nagar, Karachi\nLandmark: Near Muhabbat Nagar Chowk\n\nSearch "Hot N Tasty Roll Malir" on Google Maps. We have dine-in and takeaway! 🗺️`;
    }

    // Contact
    if (intent === 'contact') {
        return `📞 Contact Us:\n• Phone: 0318-2370631\n• Phone: 0320-3742455\n• WhatsApp: 0341-3139107\n• Instagram: @hotntastyroll\n• Facebook: Hot N Tasty Roll`;
    }

    // Delivery
    if (intent === 'delivery') {
        return `🚚 Delivery Info:\n• Time: 30-45 minutes\n• Minimum order: Rs. 300\n• Free delivery above Rs. 1,500\n• Charges: Rs.80 (5km), Rs.120 (10km), Rs.150 (above 10km)\n• Payment: Cash, Card, JazzCash, EasyPaisa\n\nCall 0318-2370631 or WhatsApp 0341-3139107 to order!`;
    }

    // Popular items
    if (intent === 'popular') {
        return `🌟 Our Most Popular Items:\n• Chicken Chatni Roll — Rs. 180\n• Zinger Burger — Rs. 340\n• Chicken Tikka (Leg) — Rs. 280\n• BBQ Deal — Rs. 1,800\n• Chicken Fried Rice — Rs. 350\n• Malai Tikka — Rs. 340\n\nWant details on any of these? 😊`;
    }

    // Deals
    if (intent === 'deal') {
        const deals = KNOWLEDGE_BASE.deals || [];
        const bestDeals = deals.filter(d => d.bestseller).slice(0, 4);
        let response = `🔥 Hot Deals:\n`;
        for (const deal of bestDeals) {
            response += `\n• ${deal.name}: Rs. ${deal.price} (Save Rs. ${deal.savings})\n  Includes: ${deal.items.slice(0, 3).join(', ')}`;
        }
        response += `\n\nAsk me about any deal for full details!`;
        return response;
    }

    // Vegetarian
    if (intent === 'vegetarian') {
        return `🥦 Vegetarian Options:\n• Vegetable Fried Rice — Rs. 280\n• Vegetable Chowmein — Rs. 300\n• Cheese Lover Pizza — Rs. 550\n• Cheese Fries — Rs. 230\n• Regular Fries — Rs. 150\n• Masala Fries — Rs. 180\n\nAll prepared fresh! 🌱`;
    }

    // Price check for specific item
    if (intent === 'price' || query.includes('price') || query.includes('kitne') || query.includes('how much')) {
        for (const [category, data] of Object.entries(KNOWLEDGE_BASE.menu || {})) {
            for (const item of data.items) {
                const itemNameLower = item.name.toLowerCase();
                if (query.includes(itemNameLower) || itemNameLower.split(' ').some(word => word.length > 3 && query.includes(word))) {
                    return `💰 ${item.name}\nPrice: Rs. ${item.price}\nCategory: ${category}\n${item.description ? `Description: ${item.description}` : ''}\n${item.bestseller ? '⭐ This is one of our bestsellers!' : ''}`;
                }
            }
        }
    }

    // Category search
    for (const [category, data] of Object.entries(KNOWLEDGE_BASE.menu || {})) {
        const catLower = category.toLowerCase();
        if (query.includes(catLower.split(' ')[0]) || query.includes(catLower.split(' ').pop())) {
            const items = data.items.slice(0, 5);
            let response = `📋 ${category}:\n`;
            for (const item of items) {
                response += `• ${item.name} — Rs. ${item.price}`;
                if (item.bestseller) response += ` ⭐`;
                response += '\n';
            }
            if (data.items.length > 5) response += `...and ${data.items.length - 5} more items!\n`;
            response += `\nAsk for any specific item's details!`;
            return response;
        }
    }

    // Menu overview
    if (intent === 'menu') {
        const categories = Object.keys(KNOWLEDGE_BASE.menu || {});
        return `🍽️ Our Menu Categories:\n${categories.map(c => `• ${c}`).join('\n')}\n\nWe have ${Object.values(KNOWLEDGE_BASE.menu).reduce((a, c) => a + c.items.length, 0)}+ items! Ask about any category or specific dish.`;
    }

    // Order
    if (intent === 'order') {
        return `📱 How to Order:\n1. 📞 Call: 0318-2370631\n2. 💬 WhatsApp: 0341-3139107\n3. 📱 Foodpanda app\n4. 🏠 Visit: Shop #9, Malir 15\n\nDelivery in 30-45 mins! Min order Rs. 300 🛵`;
    }

    // FAQ search
    if (KNOWLEDGE_BASE.faqs) {
        for (const faq of KNOWLEDGE_BASE.faqs) {
            const matches = faq.keywords && faq.keywords.some(k => query.includes(k));
            if (matches) return faq.answer;
        }
    }

    // Default
    return `I'm here to help! 🍽️\n\nYou can ask me about:\n• 📋 Menu & Prices\n• 🔥 Deals & Combos\n• 🚚 Delivery Info\n• 📍 Location & Hours\n• ⭐ Popular Dishes\n• 💬 General questions\n\nWhat would you like to know?`;
}

// ================================================================
// MAIN AI RESPONSE ENGINE (GROQ)
// ================================================================
async function getAIResponse(userMessage) {
    if (!GROQ_API_KEY) {
        return searchInKnowledgeBase(userMessage);
    }

    try {
        const systemPrompt = buildSystemPrompt();

        conversationHistory.push({ role: "user", content: userMessage });
        if (conversationHistory.length > 24) {
            conversationHistory = conversationHistory.slice(-24);
        }

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
                temperature: 0.75,
                max_tokens: 800,
                top_p: 0.9,
                frequency_penalty: 0.1,
                presence_penalty: 0.1
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error('GROQ API Error:', response.status, errData);
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        conversationHistory.push({ role: "assistant", content: aiResponse });

        return aiResponse;

    } catch (error) {
        console.error('GROQ API Error:', error);
        return searchInKnowledgeBase(userMessage);
    }
}

// ================================================================
// TYPING DELAY (Human-like response timing)
// ================================================================
function getTypingDelay(message) {
    const words = message.split(' ').length;
    const base = 600;
    const perWord = 40;
    const max = 2500;
    return Math.min(base + words * perWord, max);
}

// ================================================================
// GREETING MESSAGE
// ================================================================
function getChatbotGreeting() {
    const greetings = [
        `Assalam-o-Alaikum! 👋 I'm **Tasty**, your AI food assistant at Hot N Tasty Roll!\n\nI can help you with:\n🍽️ Full menu & exact prices\n🔥 Best deals & combos\n🚚 Delivery info\n📍 Location & timings\n💬 General questions too!\n\nWhat can I do for you?`,
        `Welcome to Hot N Tasty Roll! 🍽️ I'm **Tasty**, your personal food guide!\n\nAsk me anything — from our crispy rolls to juicy burgers, or even general questions. I'm here to help!\n\nWhat's on your mind today?`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

// ================================================================
// SEND MESSAGE (Called from UI)
// ================================================================
async function sendChatbotMessage(message) {
    if (isProcessing) return "Please wait, I'm thinking... 🤔";
    if (!message.trim()) return null;

    isProcessing = true;
    try {
        const response = await getAIResponse(message.trim());
        isProcessing = false;
        return response;
    } catch (error) {
        isProcessing = false;
        console.error('Chatbot error:', error);
        return "Sorry, I hit a snag! 😅 Please try again or call us at 0318-2370631.";
    }
}

// ================================================================
// RESET CONVERSATION
// ================================================================
function resetChatbotConversation() {
    conversationHistory = [];
    sessionContext = { lastCategory: null, lastItem: null, userName: null };
    console.log('🔄 Conversation reset');
}

// ================================================================
// EXPOSE GLOBALS
// ================================================================
window.getAIResponse = getAIResponse;
window.searchInKnowledgeBase = searchInKnowledgeBase;
window.getChatbotGreeting = getChatbotGreeting;
window.sendChatbotMessage = sendChatbotMessage;
window.resetChatbotConversation = resetChatbotConversation;
window.detectIntent = detectIntent;
window.getTypingDelay = getTypingDelay;

// ================================================================
// INIT
// ================================================================
loadApiKey().then(() => {
    console.log('🤖 Hot N Tasty Chatbot Engine v3.0 loaded!');
});
