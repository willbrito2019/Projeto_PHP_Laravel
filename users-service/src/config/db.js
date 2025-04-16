const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/microsservico_users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected for Users Service'))
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;
