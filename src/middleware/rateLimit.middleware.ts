import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs:  60 * 1000, // 1 minutes
  max: 10,
  message: "Too many requests, please try again later.",
});
