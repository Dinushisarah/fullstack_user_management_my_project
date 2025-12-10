const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp')
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});