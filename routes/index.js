const express = require('express');
const mockRoute = require('./mock.route');
const router = express.Router();

router.use('/mock', mockRoute);

module.exports = router;