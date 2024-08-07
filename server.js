const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const tourRoutes = require('./routes/tourRoutes');
const connectDB = require('./db/mongoDB');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', companyRoutes);
app.use('/api', tourRoutes);

connectDB(app)
