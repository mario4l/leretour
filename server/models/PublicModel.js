var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema;
var publicEntry = new Schema({


	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	entry: {
		type: Schema.Types.ObjectId,
		ref: 'Entry'
	},

});
module.exports = Mongoose.model('Public', publicEntry);