const bcrypt = require('bcrypt');

const User = require('../controllers/user-schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const sendStatus = (res, dataUser, user) => {
    if (!user.length) {
        dataUser.progress = [];
        (new User(dataUser)).save();
        res.json({status: 1});
    } else {
        res.json({status: 0});
    }
}

const regUser = (req, res) => {
    const dataUser = req.body;

    User.find({email: dataUser.email}, function(err, user){
        if(err) return console.log(err);

        sendStatus(res, dataUser, user);
    });
}

module.exports = {
    regUser,
}