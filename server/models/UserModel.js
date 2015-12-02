var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var UserSchema = mongoose.Schema({
	name: { type: String },
	local: {
		email: {type: String},
		password: {type: String}
	},
	facebook: { type: String},
	userEntries: { type: [{ type: mongoose.Schema.Types.ObjectId,ref: 'Entry'}], default:[]}
})



// hash password
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// validate password
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};



module.exports = mongoose.model('User', UserSchema);