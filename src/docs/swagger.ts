import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Backend API Documentation",
      version: "1.0.0",
      description: "API documentation for your backend setup (Express + Sequelize + TypeScript).",
      contact: {
        name: "Nishank Pathak",
        email: "nishank@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  // Path to your route and model files (for Swagger annotations)
  apis: [path.join(__dirname, "../routes/*.ts"), path.join(__dirname, "../models/*.ts")],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
