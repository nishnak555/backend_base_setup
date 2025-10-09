// src/docs/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

// Use path.resolve to get the project root safely
const rootDir = path.resolve(); // C:\Users\patha\backend_base_setup\backend

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Backend API Documentation",
      version: "1.0.0",
      description:
        "API documentation for your backend setup (Express + Sequelize + TypeScript).",
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
  // Paths to route and model files for Swagger annotations
  apis: [
    path.join(rootDir, "src/routes/*.ts"),
    path.join(rootDir, "src/models/*.ts"),
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
