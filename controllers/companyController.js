const Company = require('../models/Company');
const serializeCompany = require('../serializers/CompanySerializer');

const createCompany = async (req, res) => {
    try {
        const companyInfo = await serializeCompany(req.body);
        const company = new Company({
            ...companyInfo,
            owner: req.user_id,
        });

        await company.save();
        res.status(201).send(company);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find({});
        res.status(200).send(companies);
    } catch (error) {
        res.status(500).send({ error: error})
    };
};

module.exports = { createCompany, getCompanies };