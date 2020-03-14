const mongoose = require('mongoose');

const connectToMongo = (dbUrl,callback) =>{
    mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false}).then(() => {
        console.log('Connected to MongoDB');
        callback();
    });
}

module.exports = connectToMongo;