var mongoose = require("mongoose");
var Poll = mongoose.model("Poll");
var User = mongoose.model("User");
module.exports = (function(){
	return{
		find: function(req, res){
			Poll.find({}, function(err, results){
				if (err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},
		findPoll: function(req, res){
			var id = req.params.id
			Poll.find({_id: id}, function(err, results){
				if (err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},
		add: function(req, res){
			var zero = 0;
			var newPoll = new Poll({question: req.body.question, option1: req.body.option1, votes1: zero, option2: req.body.option2, votes2: zero, option3: req.body.option3, votes3: zero, option4: req.body.option4, votes4: zero, username: req.body.username, date: req.body.date})
			newPoll.save(function(err){
				if (err){
					console.log(err)
				} else{
					console.log("success");
					res.redirect("/");
				}
			})
		},
		deletePoll: function(req, res){
			var id = req.params.id;
			Poll.remove({_id: id}, function(err, results){
				if (err){
					console.log(err)
				} else{
					console.log("success");
					res.redirect("/");
				}
			})
		},
		addVote: function(req, res){

			var id = req.params.id;
			var option = req.params.option;
			if (option == 1) {
				Poll.find({_id: id}, function(err, results){
					var initial = results[0].votes1
					var newNumber = initial + 1;
					Poll.update({_id:id}, {votes1: newNumber}, function(err, results){
						if (err){
							console.log(err)
						} else{
							console.log("success");
							res.redirect("/");
						}
					});
				});
			}
			else if (option == 2){
				Poll.find({_id: id}, function(err, results){
					var initial = results[0].votes2
					var newNumber = initial + 1;
					Poll.update({_id:id}, {votes2: newNumber}, function(err, results){
						if (err){
							console.log(err)
						} else{
							console.log("success");
							res.redirect("/");
						}
					});
				});
			}
			else if (option == 3){
				Poll.find({_id: id}, function(err, results){
					var initial = results[0].votes3
					var newNumber = initial + 1;
					Poll.update({_id:id}, {votes3: newNumber}, function(err, results){
						if (err){
							console.log(err)
						} else{
							console.log("success");
							res.redirect("/");
						}
					});
				});
			}
			else if (option == 4){
				Poll.find({_id: id}, function(err, results){
					var initial = results[0].votes4
					var newNumber = initial + 1;
					Poll.update({_id:id}, {votes4: newNumber}, function(err, results){
						if (err){
							console.log(err)
						} else{
							console.log("success");
							res.redirect("/");
						}
					});
				});
			}
		}
	}
})();