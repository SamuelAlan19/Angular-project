// var bodyParser = require('body-parser'); 
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());


const { debug } = require('console');
const express = require('express'); 
const { appendFile } = require('fs');
const app = express(); 

 

var contatos = [
	{nome: "Bruno", Telefone: "9999-2222", data: new Date().toLocaleDateString, operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", Telefone: "9999-3333", data: new Date().toLocaleDateString, operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", Telefone: "9999-9999", data: new Date().toLocaleDateString, operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];

app.use(express.static(__dirname + '/public'));
// app.use(express.bodyParser());

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/contatos', function(req, res) {
    res.json(contatos);
  });

app.post('/contatos', function(req, res) { 
    contatos.push(req.body);
    res.json(true);
  });

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
  });

app.listen(process.env.PORT || 3412);