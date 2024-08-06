const User = require('../models/User');
const jwt = require('jsonwebtoken');
const serializeUser = require('../serializers/UserSerializer');

const secretJWT = process.env.JWT_SECRET;

const register = async (req, res) => {
    try {
        const userInfo = await serializeUser(req.body);
        const user = new User(userInfo);
        await user.save();
        const token = jwt.sign({ _id: user._id }, secretJWT);
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(`error: ${error}`);
    };
};

const login = async (req, res) => {
    try {
        const user = User.findOne({ email: req.body.email });
        if (!user || (await user.comparePassword(req.body.password))) {
            res.status(401).send('Invalid login credentials!')
            throw new Error('Invalid login credentials!')
        };

        const token = jwt.sign({ _id: user._id }, secretJWT);
        res.status(200).send({ user, token });
    } catch (error) {
        res.status(400).send({ error: 'Invalid login credentials' });
    }
};

const getProfile = async (req, res) => {
    res.send(req.user);
};

module.exports = { register, login, getProfile };