const express = require('express');
const { translateController } = require('../../controllers/index.js');

const router = express.Router();

router.post('/', translateController.translateData);

module.exports = router;
