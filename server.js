// Lê os dados do arquivo .env
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bd = require('./bd');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded());

app.use('/api/receitas', require('./controller/receitas_controller'))



console.log("Conectando ao Banco de");
bd.conecta(() => { 
    console.log('Conectado. Iniciando o servidor web...');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor no ar em: http://localhost:${process.env.PORT}`);
    });
  });