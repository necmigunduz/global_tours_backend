const { plainToInstance } = require('class-transformer');
const { validateSync } = require('class-validator');

class TourSerializer {
    constructor(title, description, location, date, photos, rate) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.date = date;
        this.photos = photos;
        this.rate = rate;
    }

    validate() {
        const errors = [];
        if (typeof this.title !== 'string') errors.push('Title must be a string');
        if (typeof this.description !== 'string') errors.push('Description must be a string');
        if (typeof this.location !== 'string') errors.push('Location must be a string');
        if (!(this.date instanceof Date)) errors.push('Date must be a valid date');
        if (!Array.isArray(this.photos) || !this.photos.every(photo => typeof photo === 'string')) errors.push('Photos must be an array of strings');
        if (typeof this.rate !== 'number') errors.push('Rate must be a number');
        return errors;
    }
}

const serializeTour = (data) => {
    const tour = plainToInstance(TourSerializer, data);
    const errors = tour.validate();
    
    if (errors.length > 0) {
        throw new Error(`Validation failed: ${errors.join(', ')}`);
    }
    
    return tour;
};

module.exports = serializeTour;
