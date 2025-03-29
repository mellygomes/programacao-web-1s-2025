const express = require('express')
const app = express()

const calc = require('./util/calculadora')

app.get('/', (req, res) => {
    let html = '<h1>Olá, mundo!</h1>'
    html += '<h3>Rotas disponíveis</h3>'
    html += '<p>/somar/:a/:b (<a href="somar/2/3"> somar </a>) </p>'
    html += '<p>/subtrair/:a/:b (<a href="subtrair/2/3"> subtrair </a>) </p>'
    html += '<p>/multiplicar/:a/:b (<a href="multiplicar/2/3"> multiplicar </a>) </p>'
    html += '<p>/dividir/:a/:b (<a href="dividir/2/3"> dividir </a>) </p>'
    res.send(html)
})

app.get('/somar/:a/:b', (req, res) => {
    let a = Number(req.params.a)
    let b = Number(req.params.b)

    result = calc.sum(a, b)
    if(isNaN(result)) {
        res.send('Não foi possível calcular')
    } else {
        res.send(`${a} + ${b} = ${result}`)
    }
})

app.get('/subtrair/:a/:b', (req, res) => {
    let a = Number(req.params.a)
    let b = Number(req.params.b)

    result = calc.sub(a, b)

    res.send(`${a} - ${b} = ${result}`)
})

app.get('/multiplicar/:a/:b', (req, res) => {
    let a = Number(req.params.a)
    let b = Number(req.params.b)

    result = calc.mult(a, b)

    res.send(`${a} * ${b} = ${result}`)
})

app.get('/dividir/:a/:b', (req, res) => {
    let a = Number(req.params.a)
    let b = Number(req.params.b)

    result = calc.div(a, b)

    res.send(`${a} / ${b} = ${result}`)
})

const PORT = 8080

app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT)
})