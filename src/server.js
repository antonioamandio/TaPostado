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

// Temporary endpoint to test DB connection
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    return res.json(users)
})

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
