const bcrypt = require('bcryptjs');
const saltRounds = 10;

const preSave = async (next) => {
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
}

const comparePassword = async (password) => {
    return bcrypt.compare(password, this.password);
}

module.exports = {
    preSave,
    comparePassword
};