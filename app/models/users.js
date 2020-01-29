const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    id: Number,
    userName: String,
    daysPresent: Number,
    flat: Number,
});

mongoose.model('Users', UsersSchema);