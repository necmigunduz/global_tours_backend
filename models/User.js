const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { preSave, comparePassword } = require('../utils/userMethods');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['tour_guide', 'tourist'], default: 'tourist' },
});

userSchema.pre('save', preSave);
userSchema.methods.comparePassword = comparePassword;

const User = mongoose.model('User', userSchema);
module.exports = User;
