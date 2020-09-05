const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

try {
	mongoose.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
	console.log('MongoDB connected...');
} catch (err) {
	console.error(err.message);
	process.exit(1);
}

// setup models
require('../models/Admin');
require('../models/Applicant');
require('../models/License');
