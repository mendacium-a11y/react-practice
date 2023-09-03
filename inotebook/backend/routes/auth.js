const express = require('express') 
const router = express.Router()
const { PrismaClient } = require('@prisma/client');



const prisma = new PrismaClient()



router.get('/',async (req,res)=>{
    console.log(req.body)
    const { email, name } = req.body
    const newUser = await prisma .user.create({
        data:{
            email,
            name,
        },
    })
    res.send(req.body)
})

module.exports = router
