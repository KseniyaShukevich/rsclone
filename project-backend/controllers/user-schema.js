const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: String,
        password: String,
        progress: Array,
    },
    {
        versionKey: false
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;