const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/microsservico_orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected for Orders Service'))
  .catch(err => console.log(err));

module.exports = mongoose;
