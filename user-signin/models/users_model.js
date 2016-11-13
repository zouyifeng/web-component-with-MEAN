var mongoose = require('mongoose'),
	schema = mongoose.Schema;

var UserSchema = new Schema({
	username: { type: String, unique: true},
	email: String,
	color: String,
	hashed_password: String
});

mongoose.model('User', UserSchema);