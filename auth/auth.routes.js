const express = require('express');
const router = express.Router();
const { validateFields } = require('./applicants.validator');

const { applicantLogin, adminLogin, getAdmin, getApplicant } = require('./auth.controller');
const auth = require('../middleware/auth');

// @route       GET api/auth
// @desc        Get logged in applicant
// @access      Private
router.get('/', auth, getApplicant);

// @route       GET api/auth
// @desc        Get logged in admin
// @access      Private
router.get('/', auth, getAdmin);

//@route        POST api/auth
//@desc         Auth user & get token
//@access       Public
router.post('/applicant', validateFields, applicantLogin);

//@route        POST api/auth
//@desc         Auth user & get token
//@access       Public
router.post('/admin', validateFields, adminLogin);

module.exports = router;
