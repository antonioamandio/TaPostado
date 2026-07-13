import express from 'express'
import { userRepository } from './container.js'

const PORT = process.env.PORT || 3333
const app = express()

app.user(express.json())

// Endpoint to test API connection
app.get('/health', (req, res) => {
    try {
        res.status(200).send()
    } catch (error) {
        res.status(500).send()
    }
})

/*
// Temporary endpoint for testing - GET /users
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    return res.json(users)
})
*/

// Temporary endpoint for testing - POST /users
app.post('/users', async (req, res) => {
    const user = await userRepository.create({
        name: 'Antonio Amandio',
        email: 'email de testeeeeeeeee',
        password: 'Os repositories estao a funcionar',
    })

    return res.status(201).json(user)
})

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
