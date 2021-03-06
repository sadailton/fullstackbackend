const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

//Configs
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server)

var corsOptions = {
    origin : 'https://fullstackfrontend-cursoreactjs.herokuapp.com',
    optionsSuccessStatus : 200
}

app.use(cors(corsOptions));
app.use(express.json());

//Database connection
//mongoose.connect('mongodb://localhost:27017/databaseName', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb+srv://admin:admin@cluster0-jng2g.mongodb.net/integraGit?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(process.env.MONGODB,{useNewUrlParser: true, useUnifiedTopology: true});

//Models
requireDir('./src/models');

//Websocket - middleware
app.use((req,res,next) => {
    req.io = io;
    next();
})


//Rotas
app.use('/api', require('./src/routes'));

server.listen(process.env.PORT || 3002);
console.log("Servidor iniciado na porta 3002");