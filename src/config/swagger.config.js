const swaggerJsDoc = require("swagger-jsdoc");

const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app) {
  const swaggerDocuments = swaggerJsDoc({
    swaggerDefinition: {
      info: {
        title: "divarClone-backend",
        description: "projech tamrin",
        version: "0.0.1",
      },
    },
    apis: [],
  });

  const swagger = swaggerUi.setup(swaggerDocuments, {});
  app.use("/", swaggerUi.serve, swagger)
}

module.exports = swaggerConfig;
