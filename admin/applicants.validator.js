const Joi = require('@hapi/joi');
const { formatValidationErrorMessages } = require('../utils/helpers');

const applicantSchema = Joi.object({
	first_name: Joi.string().max(30).required(),
	last_name: Joi.string().max(30).required(),
	date_of_birth: Joi.string().max(40).required(),
	sex: Joi.string().max(6).required(),
	occupation: Joi.string().required(),
	residential_address: Joi.string().required(),
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net', 'org', 'ng'] }
	}),
	state_of_origin: Joi.string().required(),
	password: Joi.string().required()
});
const validateFields = (req, res, next) => {
	const { error } = applicantSchema.validate(req.body, { abortEarly: false });

	// if validation fails
	if (error) {
		res.status(422).json({
			message: formatValidationErrorMessages(error)
		});
		return;
	}
	next();
};

module.exports = {
	validateFields
};
