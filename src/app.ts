import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import hpp from "hpp";
import compression from "compression";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import { errorMiddleware } from "./middleware/error.middleware";
import { rateLimiter } from "./middleware/rateLimit.middleware";
import expressWinston from "express-winston";
import { logger } from "./config/logger.config";

const app: Application = express();

// Security Middlewares
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(helmet());
app.use(hpp());
app.use(compression());

// Logging: request info
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    meta: false, // don't include headers/body
    msg: "{{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    colorize: false,
  })
);

// Rate limiter
app.use(rateLimiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// in app.ts
app.use("/", routes); // mount at root

app.use("/api", routes);



// Error handling
app.use(errorMiddleware);

export default app;
