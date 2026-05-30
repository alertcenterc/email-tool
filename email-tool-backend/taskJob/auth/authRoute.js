import express from 'express';
import { validate } from '../../utils/validate.js';
import { loginSchema, signupSchema } from './zod.js';
import { signup } from './signup.js';
import { login } from './login.js';
import { rateLimit } from '../../utils/rateLimit.js';
const router = express.Router();

// signup route
router.post(
  "/auth/login",
  validate(loginSchema),
  rateLimit,
  login,
);

router.post(
  "/auth/signup",
  validate(signupSchema),
  rateLimit,
  signup
);

export default router;