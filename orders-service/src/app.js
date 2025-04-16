const express = require('express');
const cors = require('cors');
require('./config/db'); // Conexão com MongoDB
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/orders', orderRoutes);

module.exports = app;
