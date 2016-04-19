var mongoose = require("mongoose");
var PollSchema = mongoose.Schema({
	question: String,
	option1: String, 
	votes1: Number,
	option2: String, 
	votes2: Number,
	option3: String, 
	votes3: Number,
	option4: String, 
	votes4: Number,
	date: String,
	username: String
});
mongoose.model("Poll", PollSchema);