const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({message:'Hello World!'}));

app.post('/name', (req,res) =>{
    res.json({name:req.body.name});
})

app.listen(port,()=>{
    console.log(`Server Listening in Port ${port}`);
})

module.exports = app;