const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const User = require('./user-schema');

const db = mongoose.connection;

const updateUser = (req) => {
  User.updateOne(
    { email: req.body.email },
    { $set: { token: req.body.token } },
    (err) => {
      if (err) return console.log(err);
      return null;
    }
  );
};

const getStatusLog = (req, res) => {
  User.find({ email: req.body.email }, async (err, result) => {
    if (err) return console.log(err);

    if (!result.length) {
      res.status(401).end();
    }
    else {
      const isThisUser = await bcrypt.compare(req.body.password, result[0].password);

      if (isThisUser) {
        updateUser(req);
        res.json({});
      }
      else {
        res.status(401).end();
      }
    }

    return null;
  });
};

const redirect = (req, res) => {
  res.redirect('/user');
};

module.exports = {
  redirect,
  getStatusLog
};
