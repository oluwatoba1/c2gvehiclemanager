const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
	{
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		date_of_birth: {
			type: Date,
			required: true
		},
		sex: {
			type: String,
			required: true
		},
		state_of_origin: {
			type: String,
			required: true
		},
		occupation: {
			type: String,
			required: true
		},
		residential_address: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('user', UserSchema);
