const consign = require('consign')
const express = require('express')
const app = express()
const usuario = new require('./models/usuario')
const pets = new require('./models/pet')
const doacoes = new require('./models/doacoes')

var porta = '3200'

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req,res)=>res.send('API - Amigo do pet'))
consign()
    .include('./controllers/rotas')
    .into(app)

app.listen(porta, () => console.log(`Servidor rodando em: http://localhost:${porta}`));