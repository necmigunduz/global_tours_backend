const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    location: { type: String, requried: true },
    date: { type: Date, required: true },
    photos: [String],
    rate: { type: Number, default: 0 },
});

module.exports = mongoose.model('Tour', tourSchema);