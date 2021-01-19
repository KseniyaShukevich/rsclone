const express = require('express');

const router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../project/dist/user.html'));
});

module.exports = router;
