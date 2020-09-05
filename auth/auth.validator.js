const Joi = require('@hapi/joi');
const { formatValidationErrorMessages } = require('../utils/helpers');

const authSchema = Joi.object({
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net', 'org', 'ng'] }
	}),
	password: Joi.string().required()
});
const validateFields = (req, res, next) => {
	const { error } = authSchema.validate(req.body, { abortEarly: false });

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
