const express = require('express')
const app = express()
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT;
const connectToDB = require('./connections/db-connection');
const routes = require('./routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/express-app', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.sendStatus(404);
});

connectToDB(process.env.TEST_DB,()=>{
    app.listen(port, () => console.log(`Application listening on port ${port}!`))
})
