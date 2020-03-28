const express = require('express');
const express = require('cors'); 
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodo get recebe/lista informacao
// Metodo POST criar informacoao no bakc
// PUT alterar informacao do back
// DELETE deletar uma informacao do back

// Tipos de parametro

// Query params: parametros nomeados enviados na rota apos o ? e geralmente servem para filtros, paginacao.
// Route Params: parametros utilizados para identificar recursos. (ID)
// Request Body: Corpo da requisicao utilizado para criar ou alterar recursos


// banco de dados sql -> SQLite
// NoSql -> mongodb

// Driver: SELECT * FROM USERS
// Query Builder: table("users").select("*").where("")

app.listen(3333);