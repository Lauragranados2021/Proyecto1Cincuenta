
const swaggerJSDoc = require('swagger-jsdoc')
const fs = require("fs");
const path = require("path");
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Documentacion de la API',
      version: '1.0.0',
      description: 'Documentacion de la API RESTFULL creada en clase de Electiva Web',
      
    },
    servers: [
      {
        url: 'https://proyecto1-cincuenta.vercel.app/oficinas',
        description: 'Servidor de oficinas y alquiler de contratos',
      },
      
    
    ]};
const options = {
swaggerDefinition,
apis: ["./Routes/routes-alquiler.js",
       
        "./Routes/routes-oficina.js"
       ]
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec