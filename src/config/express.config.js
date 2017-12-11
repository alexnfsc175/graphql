const express = require("express");

// Importa do graphqlHTTP que cria um servidor preparado pro GraphQL + HTTP
const graphqlHTTP = require("express-graphql");

const schema = require("../schemas/Character");

// Exporta função
module.exports = () => {
    const app = express();

  //Resolve questões de cross-domain
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  
  //Rota apenas para testar a aplicação
  app.get('/', (req, res) => res.json({test: 'success'}));

  app.use(
      '/player', 
      graphqlHTTP({
          schema,
          graphiql: true,
      })// Reapassando a instancia da função graphqlHTTP
    );
  
  //Retorna a instancia do Express
  return app
}