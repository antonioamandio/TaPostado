import express from 'express'
import { prisma } from './config/database.js'

const PORT = process.env.PORT || 3333
const app = express()

// Endpoint to test API connection
app.get('/health', (req, res) => {
    try {
        res.status(200).send()
    } catch (error) {
        res.status(500).send()
    }
})

// Temporary endpoint for testing
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    return res.json(users)
})

// Temporary endpoint for testing
app.get('/posts', async (req, res) => {
    const posts = await prisma.post.findMany()

    return res.json(posts)
})

// Temporary endpoint for testing
app.get('/comments', async (req, res) => {
    const comments = await prisma.comment.findMany()

    return res.json(comments)
})

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
