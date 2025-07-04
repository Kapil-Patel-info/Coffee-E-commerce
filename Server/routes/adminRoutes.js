const express = require('express');
const router = express.Router();
const { uploadProduct, adminLogin } = require('../controllers/adminController');
const { storage } = require('../cloudinary');
const multer = require('multer');
const upload = multer({ storage });

router.post('/adminLogin', adminLogin);
router.post('/uploadProduct', upload.array('images', 10), uploadProduct);

module.exports = router;
