const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const connectDB = async (app) => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log('Connected to MongoDB!');
                app.listen(PORT, () => {
                    console.log(`Server is running on port: ${PORT}`);
                });
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