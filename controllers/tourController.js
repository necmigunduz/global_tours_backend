const Tour = require('../models/Tour');
const serializeTour = require('../serializers/TourSerializer');

const createTour = async (req, res) => {
    try {
        const tourInfo = serializeTour(req.body);
        
        const tour = new Tour({
            ...tourInfo,
            company: req.body.company,
        });

        res.status(201).send(tour);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getTours = async (req, res) => {
    try {
        const tours = Tour.find({});
        res.status(200).send(tours);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

module.exports = { createTour, getTours };