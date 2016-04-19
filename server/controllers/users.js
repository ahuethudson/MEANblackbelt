var mongoose = require("mongoose");
var User = mongoose.model("User");
module.exports = (function(){
	return{
		find: function(req, res){
			User.find({name: req.params.name}, function(err, results){
				if (err){
					console.log(err);
				} else {
					if (results[0]) {
						console.log("RESULTS");
						res.json(results);
					} else {
						var newUser = new User({name: req.params.name});
						newUser.save(function(err){
							if(err){
								console.log(err);
							}
							else {
								User.find({name: req.params.name}, function(err, results){
									if (err) {
										console.log(err)
									} else{
										res.json(results);
									}
								});
							}
						})
					}
				}
			});
		}
	}
})();