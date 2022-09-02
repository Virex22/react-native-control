const express = require('express');
const router = express.Router();

const userControler = require('../controllers/user');

router.post('/login',userControler.login);
router.post('/register',userControler.register);

module.exports = router;