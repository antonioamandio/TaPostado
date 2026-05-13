import express from 'express'

const PORT = 3333

const app = express()

app.get('/health', (req, res) => {
    res.json({ message: 'Servidor rodando!', status: true })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
