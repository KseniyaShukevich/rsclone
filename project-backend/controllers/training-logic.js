const path = require('path');

const getTraining = (req, res) => {
  res.sendFile(path.join(__dirname, '../../project/dist/training.html'));
};

module.exports = {
  getTraining
};
