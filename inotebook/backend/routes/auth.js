const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const { body, validationResult } = require('express-validator')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

//creating a route at /api/auth/createuser, listening for post requests
//doesnt require auth, creating a new user
router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 character').isLength({ min: 5 })
], async (req, res) => {
    //storing the output of the validation requests
    const errors = validationResult(req)
    //if the errors var is not empty send error 400 and the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    //trying to update the db with the data sent
    try {
        //destructuring the request
        const { email, name, password } = req.body

        const hashedSaltedPassword = bcrypt.hashSync(password,10)

        //starting a prisma request to see if a user with the same email exists 
        //if it does then sending an error 400 code 
        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ error: "email exists" })
        }

        //updating the db with data
        const newUser = await prisma.user.create({ data: { email, name, password:hashedSaltedPassword } })
        console.log(newUser)
        res.status(200).json(req.body)
    } catch (error) {
        console.error("error adding user", error)
        res.status(400).json({ error: "internal error" })
    }

    
})

module.exports = router
