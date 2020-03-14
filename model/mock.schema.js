const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mock = new Schema({
   userName : String
});

const mockShema = mongoose.model('UserDetails', mock);

module.exports = mockShema;