const { plainToInstance } = require('class-transformer');
const { IsEmail, IsString, MinLength, validate } = require('class-validator');

class UserSerializer {
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

const serializeUser = async (data) => {
    const user = plainToInstance(UserSerializer, data);
    
    const validationErrors = [];

    if (typeof user.name !== 'string') {
        validationErrors.push('Name must be a string');
    }

    if (typeof user.email !== 'string' || !/\S+@\S+\.\S+/.test(user.email)) {
        validationErrors.push('Email must be a valid email address');
    }

    if (typeof user.password !== 'string' || user.password.length < 6) {
        validationErrors.push('Password must be at least 6 characters long');
    }

    if (typeof user.role !== 'string') {
        validationErrors.push('Role must be a string');
    }

    if (validationErrors.length > 0) {
        throw new Error(`Validation failure: ${validationErrors.join(', ')}`);
    }

    return user;
};

module.exports = serializeUser;
