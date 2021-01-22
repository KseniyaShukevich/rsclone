const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const { promisify } = require('util');
const User = require('./user-schema');

const unlinkAsync = promisify(fs.unlink);

const updateUserImage = (req, res, result) => {
  if (result.length) {
    User.updateOne(
      { token: req.body.token },
      { $set: { image: req.file.filename, imagePath: req.file.path } },
      (er) => {
        if (er) return console.log(er);
        return null;
      }
    );
    res.json({ image: result[0].image });
  }
};

const changeImage = async (req, res) => {
  if (req.file) {
    User.find({ token: req.body.token }, async (err, result) => {
      if (err) return console.log(err);
      const { image, imagePath } = result[0];
      if (image) {
        await unlinkAsync(imagePath);
      }
      updateUserImage(req, res, result);

      return null;
    });
  }
  else {
    res.json({});
  }
};

const getPageUser = (req, res) => {
  res.sendFile(path.join(__dirname, '../../project/dist/user.html'));
};

const postDataUser = (req, res) => {
  User.find({ token: req.body.token }, (err, result) => {
    if (err) return console.log(err);

    if (result.length) {
      const userData = {
        name: result[0].name,
        progress: result[0].progress,
        email: result[0].email
      };

      res.json(userData);
    }

    return null;
  });
};

const changeName = (req, res) => {
  User.updateOne(
    { token: req.body.token },
    { $set: { name: req.body.name } },
    (err) => {
      if (err) return console.log(err);
      return null;
    }
  );
};

const changeEmail = (req, res) => {
  User.updateOne(
    { token: req.body.token },
    { $set: { email: req.body.email } },
    (err) => {
      if (err) return console.log(err);
      return null;
    }
  );
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  const saltPass = await bcrypt.genSalt(saltRounds);
  const hashedPass = await bcrypt.hash(password, saltPass);
  return hashedPass;
};

const updateUserPass = async (req) => {
  const hashedPass = await hashPassword(req.body.newPass);
  User.updateOne(
    { token: req.body.token },
    { $set: { password: hashedPass } },
    (err) => {
      if (err) return console.log(err);
      return null;
    }
  );
};

const checkAndUpdatePass = (req, res) => {
  User.find({ token: req.body.token }, async (err, result) => {
    if (err) return console.log(err);

    if (!result.length) {
      res.status(401).end();
    }

    const isThisPass = await bcrypt.compare(req.body.currPass, result[0].password);
    if (isThisPass) {
      updateUserPass(req);
      res.json({ password: 1 });
    }

    res.json({ password: 0 });
    return null;
  });
};

module.exports = {
  changeImage,
  checkAndUpdatePass,
  changeEmail,
  changeName,
  getPageUser,
  postDataUser
};
