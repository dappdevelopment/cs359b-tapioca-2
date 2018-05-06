var mongoose = require('mongoose');

var schema = require('./schema');

var uristring = process.env.MONGODB_URI || "mongodb://localhost:27017/tapioca";

mongoose.connect(uristring, function (err, res) {
    if (err) {
      	console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      	console.log ('Successfully connected to: ' + uristring);
    }
});

var saveUser = function(username, questions, answers, address, upvotes) {
	var newUser = new schema.User ({
		username: username,
		questions: questions,
		answers: answers,
		address: address,
		upvotes: upvotes
	});
	newUser.save(function (err) {
        if (err) {
        	console.log(err);
        } else {
        	console.log("saved user successfully");
        }
    });
}

module.exports.saveUser = saveUser;