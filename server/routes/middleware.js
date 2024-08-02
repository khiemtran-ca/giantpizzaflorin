require('dotenv').config();
const jwt = require('jsonwebtoken');

// Run environmental variables
async function createJWT(user) {
    // Get JWT secret from env file
    const { JWT_SECRET } = process.env;
    // Sign and create token
    const token = await jwt.sign({id: user._id}, JWT_SECRET, {
        expiresIn: 86400 // Expires in 24 hours (must login everyday)
    });
    return token;
}

async function login (req, res, next) {
    // set username and password
    if(req.body.username === "khiem" && req.body.password === "abc123") {
        const token = await createJWT({_id: '123456789'});
        res.json({message: "Hey Tran!!!", token: token})
        next()
    } else {
        res.json({message: "Hey!!! No Token For you !!!!!"})
    }

}

// Verifying the JWT (making sure the credentials from token are valid).
async function authenticateToken(req, res) {
    // Get token from headers (client side)
    const authHeader = req.headers['authorization'];
    // Get the token by splitting the token from Bearer <Token>
    const token = authHeader && authHeader.split(' ')[1];
    // Check to see if token exists
    if(!token) return res.json({success: false}); // Unauthorized request
    // Else, check if token is valid
    await jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.json({success: false});
        // Create session for user
        res.json({success: true})
    });
}

module.exports = {
    login,
    authenticateToken
}