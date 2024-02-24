const express = require('express');
const translateRoute = require('./translation.route.js');
const {validator} = require('../../middleware/index.js');

const router = express.Router();

router.use('/', validator.translateValidator, translateRoute);

module.exports = router;
