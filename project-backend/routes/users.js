const express = require('express');

const router = express.Router();
const logicUser = require('../controllers/users-logic');

/* GET users listing. */
router.get('/', logicUser.getPageUser);

router.post('/api/userData', logicUser.postDataUser);

module.exports = router;
