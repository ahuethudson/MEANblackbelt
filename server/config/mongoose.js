var mongoose = require ("mongoose");
var fs = require("fs");
mongoose.connect("mongodb://127.0.0.1/blackbelt", function(err){
	if (err){
		console.log(err);
	}
});
var model_path = __dirname + "/../models";
fs.readdirSync(model_path).forEach(function(file){
	if(file.indexOf(".js") > 0){
		require(model_path + "/" + file)
	};
})