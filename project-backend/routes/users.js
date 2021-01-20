const express = require('express');

const router = express.Router();
const logicUser = require('../controllers/users-logic');

/* GET users listing. */
router.get('/', logicUser.getPageUser);

router.post('/api/userData', logicUser.postDataUser);

router.put('/api/changeUserName', logicUser.changeName);

router.put('/api/changeUserEmail', logicUser.changeEmail);

router.post('/api/updatePass', logicUser.checkAndUpdatePass);

module.exports = router;
