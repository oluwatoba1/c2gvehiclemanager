const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { models } = require('../utils/constants');

const Applicant = mongoose.model(models.Applicant);

const register = async (req, res) => {
	try {
		let applicant = await Applicant.findOne({ email: req.body.email });

		if (applicant) {
			return res.status(400).json({ msg: 'Email already exists' });
		}

		applicant = new Applicant({
			...req.body
		});

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await applicant.save();

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
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

module.exports = {
	register
};
