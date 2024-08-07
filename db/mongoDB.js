const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log('Connected to MongoDB!');
            })
            .catch(error => {
                console.log('Error connecting to MongoDB', error);
            });
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;