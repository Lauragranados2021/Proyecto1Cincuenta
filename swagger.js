const swaggerJSDoc = require('swagger-jsdoc')
const fs = require("fs");
const path = require("path");
const swaggerDefinition = {
    definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentacion de la API',
      version: '1.0.0',
      description: 'Documentacion de la API RESTFULL creada en clase de Electiva Web',
    },
    servers: [
      {
        url: 'https://proyecto1-cincuenta.vercel.app',
        description: 'Servidor de oficinas y alquiler de contratos',
      },
    ],
    components: {
      schemas: {
        Alquiler: {
          type: 'object',
          properties: {
            code: {
              type: 'integer',
              description: 'Código único del alquiler',
            },
            ContractStartDate: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de inicio del contrato',
            },
            ContractEndDate: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de finalización del contrato',
            },
            price: {
              type: 'number',
              description: 'Precio del alquiler',
            },
            oficina: {
              type: 'string',
              description: 'ID de la oficina asociada con el alquiler',
            },
          },
        },
      },
    }, 
  }, 
    apis: [`${path.join(__dirname, "./Routes/*.js")}`],
};

const swaggerUICSSPath = path.resolve(
__dirname,
  "./node_modules/swagger-ui-dist/swagger-ui.css"
);
const css = fs.readFileSync(swaggerUICSSPath, "utf8");
const options = { 
  customCss: css,
}

const swaggerSpec = swaggerJSDoc(swaggerDefinition)
module.exports = {swaggerSpec,options}
