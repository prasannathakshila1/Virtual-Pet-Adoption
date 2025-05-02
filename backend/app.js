const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/pets', petRoutes);

module.exports = app;