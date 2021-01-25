const express = require('express');
const logicContacts = require('../controllers/index-logic');
const logicLog = require('../controllers/log-logic');
const logicReg = require('../controllers/registration-logic');

const router = express.Router();

router.post('/api/log', logicLog.getStatusLog);

router.post('/api/user', logicLog.redirect);

router.post('/api/registration', logicReg.regUser);

router.get('/api/entry', logicContacts.redirectToEntry);

module.exports = router;
