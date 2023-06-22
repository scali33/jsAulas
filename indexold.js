const express = require('express')
const app = express()
const usuario = new require('./models/usuario')
const pets = new require('./models/pet')
const doacoes = new require('./models/doacoes')

var porta = '3200'

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res)=>res.send('API - Amigo do Pet'))
app.post('/cadastar/usuarios', async (req, res)=>{
    let dados = req.body
    let respBd = await usuario.create(dados)
    res.json(respBd)
})

app.get('/consultar/usuarios/:id?', async (req, res)=>{
    let dados = req.params.id? await usuario.findOne({where:{id:req.params.id}}) : await usuario.findAll()
    res.json(dados)
})
app.put('/atualizar/usuarios/:id', async (req, res) => {
    let id = req.params.id
    let dados = req.body
    let respBd = await usuario.update(dados, {where:{id:id}})
    res.json(respBd)
})
app.delete('/excluir/usuarios/:id', async (req, res) => {
    let id = req.params.id
    let respBd = await usuario.destroy({where:{id:id}})
    res.json(respBd)
})

// par de pets agora broder
app.post('/cadastar/pets', async (req, res)=>{
    let dados = req.body
    let respBd = await pets.create(dados)
    res.json(respBd)
})
app.get('/consultar/pets/:id?', async (req, res)=>{
    let dados = req.params.id? await pets.findOne({where:{id:req.params.id}}) : await pets.findAll()
    res.json(dados)
})
app.put('/atualizar/pets/:id', async (req, res) => {
    let id = req.params.id
    let dados = req.body
    let respBd = await pets.update(dados, {where:{id:id}})
    res.json(respBd)
})
app.delete('/excluir/pets/:id', async (req, res) => {
    let id = req.params.id
    let respBd = await pets.destroy({where:{id:id}})
    res.json(respBd)
})
app.post('/cadastrar/doacoes', async (req,res) => {
    let dados = req.body
    let resp8d = await doacoes.create(dados)
    res.json(resp8d)
})
app.get('/consultar/doacoes/:id?', async (req, res)=>{
    let dados = req.params.id? await doacoes.findOne({where:{id:req.params.id}}) : await doacoes.findAll()
    res.json(dados)
})
app.put('/atualizar/doacoes/:id', async (req, res) => {
    let id = req.params.id
    let dados = req.body
    let respBd = await doacoes.update(dados, {where:{id:id}})
    res.json(respBd)
})
app.delete('/excluir/doacoes/:id', async (req, res) => {
    let id = req.params.id
    let respBd = await doacoes.destroy({where:{id:id}})
    res.json(respBd)
})
app.listen(porta, () => console.log(`Servidor rodando em: http://localhost:${porta}`));