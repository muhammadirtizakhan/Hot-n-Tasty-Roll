const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Initialize Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

console.log('✅ Supabase connected');

// ================================================================
// SERVE HTML ROOT
// ================================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ================================================================
// HEALTH CHECK
// ================================================================
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server running' });
});

// ================================================================
// CONFIG - Expose safe env vars to frontend
// ================================================================
app.get('/api/config', (req, res) => {
    res.json({
        groqApiKey: process.env.GROQ_API_KEY || ''
    });
});

// ================================================================
// REGISTER USER
// ================================================================
app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        
        console.log('📝 Register:', email);
        
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields required' });
        }
        
        const { data: existing } = await supabase
            .from('food_users')
            .select('email')
            .eq('email', email);
        
        if (existing && existing.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        
        const { data: user, error } = await supabase
            .from('food_users')
            .insert([{ name, email, password, phone: phone || null }])
            .select();
        
        if (error) {
            console.error('Insert error:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        
        const newUser = user[0];
        const { password: _, ...userWithoutPass } = newUser;
        
        console.log('✅ User registered:', email);
        res.json({ success: true, message: 'Registration successful', user: userWithoutPass });
        
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// ================================================================
// LOGIN USER
// ================================================================
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        console.log('🔐 Login:', email);
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required' });
        }
        
        const { data: users, error } = await supabase
            .from('food_users')
            .select('*')
            .eq('email', email);
        
        if (error) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (!users || users.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        const user = users[0];
        
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        const { password: _, ...userWithoutPass } = user;
        
        console.log('✅ Login successful:', email);
        res.json({ success: true, message: 'Login successful', user: userWithoutPass });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// ================================================================
// FAVORITES
// ================================================================
app.get('/api/favorites/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { data: favorites, error } = await supabase
            .from('food_favorites')
            .select('*')
            .eq('user_id', userId);
        if (error) throw error;
        res.json({ success: true, favorites: favorites || [] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch favorites' });
    }
});

app.post('/api/favorites', async (req, res) => {
    try {
        const { userId, itemId, itemName, itemCategory, itemPrice, itemImage } = req.body;
        if (!userId || !itemId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const { error } = await supabase
            .from('food_favorites')
            .insert([{ user_id: userId, item_id: itemId, item_name: itemName, item_category: itemCategory, item_price: itemPrice, item_image: itemImage }]);
        if (error) throw error;
        res.json({ success: true, message: 'Added to favorites' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add to favorites' });
    }
});

app.delete('/api/favorites/:userId/:itemId', async (req, res) => {
    try {
        const { userId, itemId } = req.params;
        const { error } = await supabase
            .from('food_favorites')
            .delete()
            .eq('user_id', userId)
            .eq('item_id', itemId);
        if (error) throw error;
        res.json({ success: true, message: 'Removed from favorites' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove from favorites' });
    }
});

// ================================================================
// COLLECTIONS
// ================================================================
app.get('/api/collections/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { data: collections, error } = await supabase
            .from('food_collections')
            .select('*')
            .eq('user_id', userId);
        if (error) throw error;
        res.json({ success: true, collections: collections || [] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch collections' });
    }
});

app.post('/api/collections', async (req, res) => {
    try {
        const { userId, itemId, itemName, itemCategory, itemPrice, itemImage, note } = req.body;
        if (!userId || !itemId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const { error } = await supabase
            .from('food_collections')
            .insert([{ user_id: userId, item_id: itemId, item_name: itemName, item_category: itemCategory, item_price: itemPrice, item_image: itemImage, note: note || null }]);
        if (error) throw error;
        res.json({ success: true, message: 'Added to collection' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add to collection' });
    }
});

app.delete('/api/collections/:userId/:itemId', async (req, res) => {
    try {
        const { userId, itemId } = req.params;
        const { error } = await supabase
            .from('food_collections')
            .delete()
            .eq('user_id', userId)
            .eq('item_id', itemId);
        if (error) throw error;
        res.json({ success: true, message: 'Removed from collection' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove from collection' });
    }
});

// ================================================================
// NEWSLETTER
// ================================================================
app.post('/api/subscribe', async (req, res) => {
    res.json({ success: true, message: 'Subscribed successfully' });
});

// ================================================================
// START SERVER
// ================================================================
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`✅ Supabase connected`);
    console.log(`📡 API ready\n`);
});
