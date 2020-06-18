require('dotenv/config');

const jwt = require('jsonwebtoken');

const genareteTokey = (params = {}) => {
    return jwt.sign(params, process.env.AUTH_SECRET, {
        expiresIn: 86400,
    });
}

module.exports = {
    genareteTokey
}