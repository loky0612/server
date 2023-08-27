const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const {test, getdocx} = require('../controllers/authControllers');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/',test);
router.post('/getdocx',upload.single('file'),getdocx);


module.exports = router;