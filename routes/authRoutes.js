const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const {test, getdocx} = require('../controllers/authControllers');

router.use(
    cors({
        credentials: true,
        origin: 'https://client-two-rho.vercel.app'
    })
)

router.get('/',test);
router.post('/getdocx',upload.single('file'),getdocx);


module.exports = router;