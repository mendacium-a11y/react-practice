var jwt = require('jsonwebtoken')

const fetchUser = (req, res, next) => {
    const token = req.header('authToken')
    if (!token) {
        res.status(401).json({ "error": "access denied" })
    }

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verify.user
        next()
    } catch (error) {
        res.status(401).json({ "error": "Access denied" })
    }
}

module.exports = fetchUser 