const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { models } = require('../utils/constants');

const Applicant = mongoose.model(models.Applicant);
const Admin = mongoose.model(models.Admin);

const applicantLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		let applicant = await Applicant.findOne({ email });

		if (!applicant) {
			res.status(400).json({ msg: 'Invalid credentials' });
		}

		const isMatch = await bcrypt.compare(password, applicant.password);
		if (!isMatch) {
			res.status(400).json({ msg: 'Invalid credentials' });
		}

		const payload = {
			user: {
				id: applicant.id
			}
		};

		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 360000
			},
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
};

const adminLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		let admin = await Admin.findOne({ email });

		if (!applicant) {
			res.status(400).json({ msg: 'Invalid credentials' });
		}

		const isMatch = await bcrypt.compare(password, admin.password);
		if (!isMatch) {
			res.status(400).json({ msg: 'Invalid credentials' });
		}

		const payload = {
			user: {
				id: admin.id
			}
		};

		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 360000
			},
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
};

const getApplicant = async (req, res) => {
	try {
		const applicant = await Applicant.findById(req.user.id).select('-password');
		res.json(applicant);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
};

const getAdmin = async (req, res) => {
	try {
		const admin = await Admin.findById(req.user.id).select('-password');
		res.json(admin);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
};

module.exports = {
	adminLogin,
	applicantLogin,
	getApplicant,
	getAdmin
};
