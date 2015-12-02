var User = require('../models/UserModel')


module.exports = {
	
	getUsers: function(req, res) {
		User.find({}, function(err, data) {
			if (err) res.status(500).send(err)
			res.json(data)
		})
	},
	
	create: function(req, res) {
		User.create(req.body, function(err, user) {
			if (err) res.status(500).send(err)
			res.json(user)
		})
	},
	me:function(req,res){
		if(!req.user){
			return res.send('current user not defined')
		}else{
			req.user.password = null;
			return res.json(req.user)
		}
	}
	
	
	// update:
	
	
	// delete:
	
}