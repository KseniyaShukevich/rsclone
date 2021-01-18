const bcrypt = require('bcrypt');

const User = require('../controllers/user-schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const updateUser = (req) => {
    User.updateOne(
        {email: req.body.email},
        { $set: {token: req.body.token}},
        function(err){
            if(err) return console.log(err);
        }
      );
}

const getStatusLog = (req, res) => {
    User.find({email: req.body.email}, async function(err, result) {
        if(err) return console.log(err);

        if (!result.length) {
          res.status(401).end();
        } else {
            const isThisUser = await bcrypt.compare(req.body.password, result[0].password);

            if (isThisUser) {
                updateUser(req);
                res.json({});
            } else {
                res.status(401).end();
            }
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