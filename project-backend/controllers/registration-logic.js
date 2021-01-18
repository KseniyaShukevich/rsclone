const bcrypt = require('bcrypt');
const User = require('./user-schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const hashPassword = async function (password) {
    saltRounds = 10;
    const saltPass = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(password, saltPass);
    return hashedPass;
}

const sendStatus = async function (res, dataUser, user) {
    if (!user.length) {
        dataUser.progress = [];
        dataUser.password = await hashPassword(dataUser.password);
        (new User(dataUser)).save();
        res.json({});
    } else {
        res.status(406).end();
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