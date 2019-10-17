const express = require('express');
const server = express();

server.use(express.json());

//rota localhost:3000/users
//Route params = /users/1
const cacos = ['Wendell', 'Erika', 'Ana Alice']

//rota 01 pega apenas 1 membro por vez
server.get('/cacos/:index', (req, res) => {
    const index = req.params.index;

    return res.json(cacos[index]);
})
//rota 01 pega todos os membros
server.get('/cacos/', (req, res) => {
    return res.json(cacos)
})

//rota 03
const santana = ['Erika', 'Eri', 'Ivone']

server.get('/santana/:index', (req, res) => {
    const index = req.params.index;

    return res.send(`Membro da familia Santana: ${santana[index]}`)
})

server.get('/santana/', (req,res) => {
    return res.send(`Todos os membros da familia Santana: ${santana}`)
})

//crud
const lista = ['arroz', 'feijao', 'macarrão', 'carne', 'batata']

server.get('/lista/', (req, res) => {
    return res.send(`Todos os itens da lista: ${lista}`)
})

server.get('/lista/:index', (req,res) => {
    const index = req.params.index;

    return res.send(`Um item da lista: ${lista[index]}`)
})

//metodo post
server.post('/lista', (req,res) => {
    const { name } = req.body;

    lista.push(name);

    return res.json(lista);
})

//metodo put
server.put('/lista/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    lista[index] = name;

    return res.json(lista);
})

server.delete('/lista/:index', (req,res) => {
    const { index } = req.params;

    lista.splice(index, 1);

    return res.json(lista);
})

//porta 3000 aberta 
server.listen(3000);

