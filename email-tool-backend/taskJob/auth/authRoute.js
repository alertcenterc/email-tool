import express from 'express';
import { validate } from '../../utils/validate.js';
import { loginSchema, signupSchema } from './zod.js';
import { signup } from './signup.js';
import { login } from './login.js';
import { rateLimiter } from '../../utils/rateLimit.js';
const router = express.Router();

// signup route
router.post(
  "/auth/login",
  validate(loginSchema),
  rateLimiter,
  login,
);

router.post(
  "/auth/signup",
  validate(signupSchema),
  rateLimiter,
  signup
);

export default router;