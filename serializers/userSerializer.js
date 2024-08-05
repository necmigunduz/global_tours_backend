const { plainToInstance } = require('class-transformer');
const { IsEmail, IsString, MinLength, validate } = require('class-validator');

class UserSerializer {
    @IsString()
    name;

    @IsEmail()
    email;

    @IsString()
    @MinLength(6)
    password;

    @IsString()
    role;
};

const serializeUser = async (data) => {
    const user = plainToInstance(UserSerializer, data);
    const errors = await validate(user);

    if(errors.length > 0) {
        throw new Error(`Validation failure: ${errors}`);
    };

    return user;
};
