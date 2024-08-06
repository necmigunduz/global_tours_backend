const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const tourRoutes = require('./routes/tourRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', companyRoutes);
app.use('/api', tourRoutes);

const PORT = process.env.PORT || 5000;

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
