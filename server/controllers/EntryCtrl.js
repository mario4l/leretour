var Entry = require('../models/EntryModel');
var User = require('../models/UserModel');
module.exports = {
	create: function (req, res) {
		Entry.create(req.body, function (err, result) {
			if (err) { res.send(err) }
			else {
				User.findByIdAndUpdate(req.user._id, {$push:{userEntries:result._id}}, function (err2, result2) {
					if (err2) { res.send(err2) }
					else {
						res.json(result)
					}
				});
			}
		})
	},
	read: function (req, res) {
		User.findOne({_id: req.user._id}).populate('userEntries').exec(function(err, result){
			if (err) { res.send(err) }
			else {
				console.log('returning user',result.userEntries)
				res.json(result.userEntries)
			}
		});
	},
	update: function (req, res) {
		Entry.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, result) {
			if (err) { res.send(err) }
			else { res.json(result) }
		});
	},
	delete: function (req, res) {
		Entry.findByIdAndRemove(req.params.id, function (err, result) {
			if (err) res.send(err);
			else res.json(result);
		});
	}
};