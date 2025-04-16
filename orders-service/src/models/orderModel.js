const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: String,
    amount: Number
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
