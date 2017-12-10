// Importa configuração e cria uma instancia do Express 
const app = require('./config/express.config')();

// Define uma porta padrão, caso não tenha alguma passada por variaveis
const port  = process.env.PORT || 8080;

// Starta o Servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

