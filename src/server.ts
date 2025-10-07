import dotenv from "dotenv";
import  app  from "./app";
import { connectDB } from "./config/db.config";
import { logger } from "./config/logger.config";

dotenv.config();

const PORT = process.env.PORT || 5000;

/**
 * Start server after DB connection is established
 */
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
