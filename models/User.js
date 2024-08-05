const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['tour_guide', 'tourist']},
});

const saltRounds = 10;

userSchema.pre('save', async (next) => {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

userSchema.methods.comparePassword = async (password) => {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);