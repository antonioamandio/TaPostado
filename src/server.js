import express from 'express'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())

// Endpoint to test API connection
app.get('/health', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Server is running',
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        })
    }
})

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
