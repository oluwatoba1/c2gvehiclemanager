const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { validateFields } = require('./license.validator');

const { save } = require('./license.controller');

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post('/', validateFields, save);

module.exports = router;
