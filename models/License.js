const mongoose = require('mongoose');

const LicenseSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'applicant',
			required: true
		},

		application_type: {
			type: String,
			required: true
		},
		test_scores: {
			type: String,
			required: true
		},
		state_of_application: {
			type: String,
			required: true
		},
		application: {
			type: String,
			required: true
		},
		residential_address: {
			type: String,
			required: true
		},
		status: {
			type: String,
			enum: ['pending', 'accepted', 'rejected'],
			default: 'pending'
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('license', LicenseSchema);
