const express = require('express');
const mongoose = require('mongoose');
const server = express();
const requireDir = require('require-dir');
const cors = require('cors')

//Configs
server.use(cors());
server.use(express.json());


//Database connection
//mongoose.connect('mongodb://localhost:27017/databaseName', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://admin:admin@cluster0-jng2g.mongodb.net/integraGit?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//Models
requireDir('./src/Models');

//Rotas
server.use('/api', require('./src/routes'));

server.listen(3002);

console.log("Servidor iniciado na porta 3002");