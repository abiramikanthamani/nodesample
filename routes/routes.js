const express = require("express");
const router = express.Router();
const subtraction = require('./subtraction');
const addition = require('./functions');
const usercreation = require('./usercreation');

router.use('/functions',addition);
router.use('/',subtraction);
router.use('/user',usercreation);

module.exports = router;
