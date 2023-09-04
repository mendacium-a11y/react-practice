const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router()
var fetchUser = require('../middleware/fetchUser')

//request to get all the notes of a user, login required
router.get('/fetchallnotes',fetchUser,async (req,res)=>{
    try {
        const userId = req.user.id
        const notes = await prisma.post.findMany({
            where:{
                AuthorId:userId,
            },
        })
        res.json(notes)


    } catch (error) {
        res.status(500).json({"error":"inavlid request"})
    }
})

//request to add a new note of a user, login required
router.post('/addnote',fetchUser,async (req,res)=>{
    try {
        const userId = req.user.id
        const notes = await prisma.post.findMany({
            where:{
                AuthorId:userId,
            },
        })
        res.json(notes)


    } catch (error) {
        res.status(500).json({"error":"inavlid request"})
    }
})

module.exports = router