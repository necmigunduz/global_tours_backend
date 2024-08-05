const { plainToInstance } = require('class-transformer');
const { IsString, validate } = require('class-validator');

class CompanySerializer {
    @IsString()
    name;

    @IsString()
    description;
};

const serializeCompany = async (data) => {
    const company = plainToInstance(CompanySerializer, data);
    const errors = await validate(company);
    
    if (errors.length > 0) {
        throw new Error(`Validation failed: ${errors}`);
    };
    
    return company;
};

module.exports = serializeCompany;