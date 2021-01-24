const path = require('path');
const User = require('./user-schema');

const postDataUser = (req, res) => {
  User.find({ token: req.body.token }, (err, result) => {
    if (err) return console.log(err);

    if (result.length) {
      const userData = {
        name: result[0].name,
        progress: result[0].progress,
        email: result[0].email
      };

      res.json([userData]);
    }

    return null;
  });
};

const getPageUser = (req, res) => {
  res.sendFile(path.join(__dirname, '../../project/dist/user.html'));
};

module.exports = {
  getPageUser,
  postDataUser
};
