// Lê os dados do arquivo .env
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bd = require('./bd');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded());

app.use('/receitas', require('./controller/receitas_controller'))

const SERVER_PORT = parseInt(process.env.SERVER_PORT);


console.log("Conectando ao Banco de");
bd.conecta(() => { 
    console.log('Conectado. Iniciando o servidor web...');
    app.listen(SERVER_PORT, () => {
      console.log(`Servidor no ar em: http://localhost:${SERVER_PORT}`);
    });
  });