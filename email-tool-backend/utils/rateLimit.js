import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per 15 mins
  message: "Too many requests",
  standardHeaders: true,
  legacyHeaders: false,
});

// rate limiter for gift card sell upload
export const uploadRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 upload requests per window
  message: "Too many upload attempts from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
