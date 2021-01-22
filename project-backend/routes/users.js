const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../project/dist');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

const router = express.Router();
const logicUser = require('../controllers/users-logic');

/* GET users listing. */
router.get('/', logicUser.getPageUser);

router.post('/api/userData', logicUser.postDataUser);

router.put('/api/changeUserName', logicUser.changeName);

router.put('/api/changeUserEmail', logicUser.changeEmail);

router.post('/api/updatePass', logicUser.checkAndUpdatePass);

router.post('/api/image', upload.single('file'), logicUser.changeImage);

// router.put('/api/image', logicUser.getImage);

module.exports = router;
