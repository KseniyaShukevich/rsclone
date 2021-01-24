const express = require('express');
const multer = require('multer');
const path = require('path');
const logicSettings = require('../controllers/users-settings-logic');

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

router.get('/', logicSettings.getPageUserSettings);

router.put('/api/name', logicSettings.updateName);

router.put('/api/email', logicSettings.updateEmail);

router.put('/api/password', logicSettings.updatePass);

router.post('/api/image', upload.single('file'), logicSettings.updateImage);

router.post('/api/password', logicSettings.checkPassword);

module.exports = router;
