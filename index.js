const express = require('express');
const server = express();

server.use(express.json());

//para rodar o projeto: yarn dev -nodemon

//elementos da rota Frutas
const frutas = ['Acerola', 'Abacaxi', 'Laranja']

//Retorna todo o array de frutas
server.get('/frutas/', (req,res) => {
    return res.json(frutas)
})

//Retorna 1 elemento do array de frutas
//Método GET
server.get('/frutas/:index', (req, res) =>{
    const { index } = req.params; 

    return res.json(frutas[index]);
})

//crud
//Método POST
server.post('/frutas', (req, res) => {
    const { name } = req.body;

    frutas.push(name);

    return res.json(frutas);
})

//Método PUT
server.put('/frutas/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    frutas[index] = name;

    return res.json(frutas);
})

//Método DELETE
server.delete('/frutas/:index', (req, res) => {
    const { index } = req.params;

    frutas.splice(index, 1);

    return res.json(frutas);
})


//Rota cores
//elementos da roda cores
const cores = ['Azul', 'Vermelho', 'Verde']

//Retorna todo o array de cores
server.get('/cores/', (req,res) => {
    return res.json(cores)
})

//Retorna 1 elemento do array de cores
//Método GET
server.get('/cores/:index', (req, res) =>{
    const { index } = req.params; 

    return res.json(cores[index]);
})

//crud
//Método POST
server.post('/cores', (req, res) => {
    const { name } = req.body;

    cores.push(name);

    return res.json(cores);
})

//Método PUT
server.put('/cores/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cores[index] = name;

    return res.json(cores);
})

//Método DELETE
server.delete('/cores/:index', (req, res) => {
    const { index } = req.params;

    cores.splice(index, 1);

    return res.json(cores);
})

//Projeto rodando na porta 3000
server.listen(3000)