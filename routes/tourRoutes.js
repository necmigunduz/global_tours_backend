const express = require('express');
const tourController = require('../controllers/tourController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/tour', auth, tourController.createTour);
router.get('/tours', tourController.getTours);

module.exports = router;