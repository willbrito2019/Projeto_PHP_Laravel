const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        
        //Verifica se o ID foi recebido corretamente
        console.log("ID recebido:", id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid user ID format" });
        }

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
};
