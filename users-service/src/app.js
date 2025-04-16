const express = require('express');
const cors = require('cors');
require('./config/db'); // Conexão com MongoDB
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);

module.exports = app;
