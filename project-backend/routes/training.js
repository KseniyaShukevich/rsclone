const express = require('express');

const router = express.Router();
const logicTraining = require('../controllers/training-logic');

router.get('/', logicTraining.getTraining);

module.exports = router;
