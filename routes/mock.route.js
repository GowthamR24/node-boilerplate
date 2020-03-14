const express = require('express');
const router = express.Router();
const { mockService } = require('./../services')

router.get('/', async (req, res, next)=>{
    mockService().then((data)=>{
        res.send(data)
    })
});

module.exports = router;