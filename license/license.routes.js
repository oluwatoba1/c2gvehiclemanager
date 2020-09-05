const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const auth = require('../middleware/auth');
const { validateFields } = require('./license.validator');
const { save, getApplications } = require('./license.controller');

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post('/', auth, validateFields, save);

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.get('/', getApplications);

module.exports = router;
