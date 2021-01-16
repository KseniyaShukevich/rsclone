const logicContacts = require('../controllers/index-logic');

const express = require('express');
const router = express.Router();

router.get('/api/contacts', logicContacts.getContacts)

router.post('/api/contacts', logicContacts.postContacts)

router.delete('/api/contacts/:id', logicContacts.deleteContacts)

router.put('/api/contacts/:id', logicContacts.putContacts)

module.exports = router;
