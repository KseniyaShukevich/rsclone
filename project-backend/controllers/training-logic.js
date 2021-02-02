const path = require('path');
const User = require('./user-schema');

const getTraining = (req, res) => {
  res.sendFile(path.join(__dirname, '../../project/dist/training.html'));
};

const postUserProgress = (req, res) => {
  User.find({ token: req.body.token }, (err, result) => {
    if (err) return console.log(err);

    if (result.length) {
      const objProgress = result[0].progress;
      objProgress[req.body.word].learned = true;
      User.updateOne(
        { token: req.body.token },
        { $set: { progress: objProgress } },
        (e) => {
          if (e) return console.log(e);
          return null;
        }
      );
      res.json({ learned: true });
    }

    return null;
  });
};

module.exports = {
  getTraining,
  postUserProgress
};
