const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { models } = require('../utils/constants');

const License = mongoose.model(models.License);

const save = async (req, res) => {
	try {
		const license = new License(req.body);

		const newLicense = await license.save();

    res.status(201).json({
			message: 'License registered successfully!',
			data: newLicense
		});

	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

const getApplications = async (req, res) => {
	try {
		const applications = License.find({});

		res.status(200).json({
			data: applications
		})
	} catch (error) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
}

module.exports = {
	save,
	getApplications
};
