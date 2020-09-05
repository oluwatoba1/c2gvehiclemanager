const Joi = require('@hapi/joi');
const { formatValidationErrorMessages } = require('../utils/helpers');

const licenseSchema = Joi.object({
	user: Joi.string().required(),
	application_type: Joi.string().max(30).required(),
	test_scores: Joi.string().max(30).required(),
	state_of_application: Joi.string().max(40).required(),
	application: Joi.string().max(30).required(),
	residential_address: Joi.string().required()
});
const validateFields = (req, res, next) => {
	const { error } = licenseSchema.validate(req.body, { abortEarly: false });

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
