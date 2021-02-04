const bcrypt = require('bcrypt');
const User = require('./user-schema');
const wordsJson = require('../verbs.json');

const hashPassword = async (password) => {
  const saltRounds = 10;
  const saltPass = await bcrypt.genSalt(saltRounds);
  const hashedPass = await bcrypt.hash(password, saltPass);
  return hashedPass;
};

const addWords = () => {
  const obj = wordsJson;

  for (key in obj) {
    obj[key].learned = false;
  }

  return obj;
};

const sendStatus = async (res, dataUser, user) => {
  if (!user.length) {
    const data = dataUser;
    data.progress = addWords();
    data.image = '';
    data.imagePath = '';
    data.password = await hashPassword(dataUser.password);
    (new User(data)).save();
    res.json({});
  }
  else {
    res.status(406).end();
  }
  return null;
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
