const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router()
var fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator')


//request to get all the notes of a user, login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id
        const notes = await prisma.post.findMany({
            where: {
                AuthorId: userId,
            },
        })
        res.json(notes)


    } catch (error) {
        res.status(500).json({ "error": "inavlid request" })
    }
})

//request to add a new note of a user, login required
router.post('/addnote', fetchUser, [
    body('title', 'enter a vali title').isLength({ min: 3 }),
    body('content', 'enter description').exists()
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }
    const { title, content } = req.body
    const userId = req.user.id


    try {
        const note = await prisma.post.create({
            data: {
                title,
                content,
                AuthorId: userId,
            },
        })

        res.status(200).json({ note })
    } catch (error) {
        console.error(error)
        res.status(500).json({ "error": "inavlid request" })
    }
})

//request to update an existing note. login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, content } = req.body

    try {
        const newNote = {}
        if (title) { newNote.title = title }
        if (content) { newNote.content = content }

        var note = await prisma.post.findUnique({
            where: {
                id: req.params.id
            }
        })

        if (!note) {
            return res.status(404).json("not found")
        }

        if (note.AuthorId.toString() !== req.user.id) {
            return res.status(401).json({ "error": "unauthorized access" })
        }
        await prisma.post.update({
            where: {
                id: req.params.id,
            },
            data: newNote, // Use the newNote object to update fields
        });
        res.status(200).json({ message: 'Note updated successfully' });
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


//request to delte an existing note, login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        var note = await prisma.post.findUnique({
            where: {
                id: req.params.id
            }
        })

        if (!note) {
            return res.status(404).json("not found")
        }

        if (note.AuthorId.toString() !== req.user.id) {
            return res.status(401).json({ "error": "unauthorized access" })
        }
        await prisma.post.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ "message": "note deleted" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router