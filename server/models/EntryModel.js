var Mongoose = require('mongoose');
var schema = new Mongoose.Schema({
	title:{type:String, required:true},
	content:{type:String, required:true},
	date:{type:String}
})
module.exports = Mongoose.model('Entry', schema)