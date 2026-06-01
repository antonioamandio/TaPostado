import express from 'express'

const PORT = process.env.PORT || 3333
const app = express()

app.get('/health', (req, res) => {
    res.json({
        message: `Servidor rodando em: ${process.env.URL || 'http://localhost'}:${PORT}`,
        status: true,
    })
})

app.listen(PORT)
