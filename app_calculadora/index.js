const express = require('express')
const calculo = require('./calculadora')

const app = express()

app.get('/', (req, resp)=>{
    resp.send('Olá, mundo!')
})

app.get('/amigo:nome', (req, resp)=>{
    resp.send(`Olá, ${req.params.nome}!`)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT)
})