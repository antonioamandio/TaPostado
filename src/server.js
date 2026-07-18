import express from 'express'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())

// Endpoint to test API connection
app.get('/health', (req, res) => {
    try {
        res.status(200).send()
    } catch (error) {
        res.status(500).send()
    }
})

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
