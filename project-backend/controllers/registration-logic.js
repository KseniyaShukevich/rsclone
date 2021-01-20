const bcrypt = require('bcrypt');
const User = require('./user-schema');

const hashPassword = async function (password) {
  const saltRounds = 10;
  const saltPass = await bcrypt.genSalt(saltRounds);
  const hashedPass = await bcrypt.hash(password, saltPass);
  return hashedPass;
};

const sendStatus = async function (res, dataUser, user) {
  if (!user.length) {
    const data = dataUser;
    data.progress = [];
    data.password = await hashPassword(dataUser.password);
    (new User(data)).save();
    res.json({});
  }
  else {
    res.status(406).end();
  }
};

const regUser = (req, res) => {
  const dataUser = req.body;
  User.find({ email: dataUser.email }, (err, user) => {
    if (err) return console.log(err);

    sendStatus(res, dataUser, user);

    return null;
  });
};

module.exports = {
  regUser
};
