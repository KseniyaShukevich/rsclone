const logicContacts = require('../controllers/index-logic');
const logicLog = require('../controllers/log-logic');

const express = require('express');
const router = express.Router();

router.get('/api/contacts', logicContacts.getContacts);

router.post('/api/contacts', logicContacts.postContacts);

router.delete('/api/contacts/:id', logicContacts.deleteContacts);

router.put('/api/contacts/:id', logicContacts.putContacts);

router.post('/api/getStatusLog', logicLog.getStatusLog);
router.post('/api/redirect', logicLog.redirect);

module.exports = router;
