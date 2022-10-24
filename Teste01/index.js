const { debug } = require('console');
const express = require('express'); 
const { appendFile } = require('fs');
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var contatos = [
	{nome: "Bruno", Telefone: "9999-2222", date: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", Telefone: "9999-3333", date: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", Telefone: "9999-9999", date: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
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
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

app.get('/contatos', function(req, res) {
    res.json(contatos);
  });

app.post('/contatos', function(req, res) { 
    contatos.push(req.body);
    res.json(true);
  });


app.post('/del_contatos', function(req, res) { 
    var name = req.query;
    res.send(`Dados: ${name}`);
    console.log(name); 
  });

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
  });

app.delete('/contatos', function (req, res){
  res.json(req);
  console.log(req.body); 
    for(i = 0; i < contatos.length; i++){
        console.log(contatos[i].nome + contatos[i].Telefone)
    };
           
});

app.listen(process.env.PORT || 3412);