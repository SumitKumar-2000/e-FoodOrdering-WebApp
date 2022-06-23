const jwt = require('jsonwebtoken')

// returning excrypted version of the id, combined with the security key provided
const generateToken = (userId) =>{
    return jwt.sign({userId},"JwtSecretKey@0123456789");
}

module.exports = generateToken;