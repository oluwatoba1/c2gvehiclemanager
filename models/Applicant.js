const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema(
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
			type: String,
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
		profile_picture: {
			type: String,
			required: false
		},
		documents: [
			{
				type: String,
				required: false
			}
		],
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('applicant', ApplicantSchema);
