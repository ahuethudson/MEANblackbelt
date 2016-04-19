var Users = require("./../controllers/users.js")
var Polls = require("./../controllers/polls.js")
module.exports = function(app){
	app.get('/', function(req, res){
		res.render("index.html");
	});
	app.get('/user/:name', function(req, res){
		Users.find(req, res);
	});
	app.get('/polls', function(req, res){
		Polls.find(req, res);
	});
	app.post("/addpoll", function(req, res){
		Polls.add(req, res);
	});
	app.get('/polls/:id', function(req, res){
		Polls.findPoll(req, res);
	});
	app.get('/delete/:id', function(req, res){
		Polls.deletePoll(req, res);
	});
	app.get('/polls/:id/:option', function(req, res){
		Polls.addVote(req, res);
	});
}