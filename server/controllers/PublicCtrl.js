var Entry = require('../models/EntryModel');
var User = require('../models/UserModel');
var Public = require('../models/PublicModel');
module.exports = {

	publicRead: function (req, res) {
		Public.findOne({ _id: req.params.id })
		// .populate("creator")
		.populate("entry creator")
		.exec(function(err, response ) {
			if(err) {
				res.status(500).send(err);
			} else {
				console.log('Server Found: ', response);
				res.send(response);
			}
		});
	},

	publicPost: function (req, res) {

		var publicPost = new Public(req.body);
		publicPost.save(function (err, publicPost) {
			if (err) res.send(err);
			else res.json(publicPost);
		});


	}


};





	
