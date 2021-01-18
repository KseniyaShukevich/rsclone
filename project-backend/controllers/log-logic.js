const bcrypt = require('bcrypt');

const User = require('../controllers/user-schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getStatusLog = (req, res) => {
    User.find({email: req.body.email, password: req.body.password}, function(err, result) {
        if(err) return console.log(err);
        if (!result.length) {
          res.json({status: '401'});
        } else {
          res.json({status: '200', user: result});
        }
    })
}

const redirect = (req, res) => {
    res.redirect('/');
}

module.exports = {
    redirect,
    getStatusLog,
}