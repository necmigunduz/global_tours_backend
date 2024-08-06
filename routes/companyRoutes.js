const express = require('express');
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/company', auth, companyController.createCompany);
router.get('/companies', companyController.getCompanies);

module.exports = router;