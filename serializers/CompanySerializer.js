const { plainToInstance } = require('class-transformer');
const { IsString, validateSync } = require('class-validator');

class CompanySerializer {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    // Custom validation function
    validate() {
        const errors = [];
        if (typeof this.name !== 'string') {
            errors.push('Name must be a string');
        }
        if (typeof this.description !== 'string') {
            errors.push('Description must be a string');
        }
        return errors;
    }
}

const serializeCompany = (data) => {
    const company = plainToInstance(CompanySerializer, data);
    const errors = company.validate();
    
    if (errors.length > 0) {
        throw new Error(`Validation failed: ${errors.join(', ')}`);
    }
    
    return company;
};

module.exports = serializeCompany;
