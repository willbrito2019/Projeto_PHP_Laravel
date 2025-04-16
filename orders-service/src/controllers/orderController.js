const mongoose = require('mongoose');
const Order = require('../models/orderModel');
const { getUserById } = require('../services/userService');

exports.getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

exports.createOrder = async (req, res) => {

    try {

        const { userId, amount } = req.body;

        console.log("UserID recebido:", userId);

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: "Invalid user ID format" });
        }        

        // Verificar se o usuário existe
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }                              
    
        const newOrder = new Order({
            userId,
            amount
        });

        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
};
