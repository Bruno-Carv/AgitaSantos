//Importa Express
const express = require('express');
//Importa configuração de servidores com acesso
const cors = require('cors');
//Importa configuração de erros de validação
const {errors} = require('celebrate');


const app = express();

//Importando rotas
const Router = require('./routes/router');
const RouterArtist = require('./routes/artistRouter');
const RouterFeeds = require('./routes/feedRouter');

//Permitindo rota de determinado Servidor
app.use(cors());
//Suporte de envio de json
app.use(express.json());
//Configuração de envio de header
app.use(express.urlencoded({extended: false}));



//Usando rota
app.use(Router);
//Usando rota de artista
app.use('/artist',RouterArtist);
//Usando rota do Feed
app.use('/feeds',RouterFeeds);

//Configurar Rota
app.use(errors());


//Exportando App
module.exports = app;