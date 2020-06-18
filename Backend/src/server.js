require('dotenv/config'); //Configurando variaveis de ambiente

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log(`Server On-line PORT:${port}`);
});
