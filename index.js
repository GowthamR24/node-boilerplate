const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/expressapp', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.sendStatus(404);
});

app.listen(port, () => console.log(`Application listening on port ${port}!`))
