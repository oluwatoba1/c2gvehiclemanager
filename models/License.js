const mongoose = require('mongoose');

const LicenseSchema = mongoose.Schema(
{
    
    application_type: {
        type: String,
        required: true
    },
    test_scores: {
        type: String,
        required: true,
    },
    state_of_application: {
        type: String,
        required: true
    },
    application:{
        type: String,
        required: true
    },
    residential_address: {
        type: String,
        required: true
    },
},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('license', LicenseSchema);  