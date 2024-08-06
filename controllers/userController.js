const User = require('../models/User');
const jwt = require('jsonwebtoken');
const serializeUser = require('../serializers/UserSerializer');

const register = async (req, res) => {};

const login = async (req, res) => {};

const getProfile = async (req, res) => {};

module.exports = { register, login, getProfile };