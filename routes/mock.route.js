const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next)=>{
    res.send("I'm working !!")
});

module.exports = router;