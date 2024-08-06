const { plainToInstance } = require('class-transformer');
const { IsString, IsDate, IsArray, IsNumber, validate } = require('class-validator');

class TourSerializer {
    @IsString()
    title;

    @IsString()
    description;

    @IsString()
    location;

    @IsDate()
    date;

    @IsArray()
    photos;

    @IsNumber()
    rate;
};

const serializeTour = async (data) => {
    const tour = plainToInstance(TourSerializer, data);
    const errors = validate(tour);

    if(errors.length > 0) {
        throw new Error(`Validation failed: ${errors}`);
    }
    
    return tour;
};

module.exports = serializeTour;