const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { validateFields } = require('./applicants.validator');

const { register } = require('./applicants.controller');

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post('/', validateFields, register);

module.exports = router;
