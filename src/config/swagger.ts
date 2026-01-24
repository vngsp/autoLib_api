import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AutoLib API',
      version: '1.0.0',
      description: 'API para gerenciamento de libs e package managers',
    },
    servers: [
      {
        url: "https://seu-app.onrender.com",
        description: 'API server',
      },
    ],
  },
  apis: ['src/routes/*.ts'], // onde estão seus routers
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
