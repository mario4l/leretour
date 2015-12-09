var Entry = require('../models/EntryModel');
var User = require('../models/UserModel');
var Public = require('../models/PublicModel');
module.exports = {

	publicRead: function (req, res) {
		Entry.findOne({ _id: req.params.id }).exec(function (err, result) {
			if (err) { res.send(err); }
			else {
				console.log('returning public entry', result);
				res.json(result);
			}
		});
	},

	publicPost: function (req, res) {
		Entry.create(req.body, function (err, result) {
			if (err) { res.send(err); }
			else {
				var publicPost = new Public(req.body);
				publicPost.save(function (err) {
					if (err) res.send(err);
					else res.json(publicPost);
				});


			}

		});
	}





};	
