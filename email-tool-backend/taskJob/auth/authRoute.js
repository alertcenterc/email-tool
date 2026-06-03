import express from 'express';
import { validate } from '../../utils/validate.js';
import { loginSchema, signupSchema, taskSubmitSchema } from './zod.js';
import { signup } from './signup.js';
import { login } from './login.js';
import { rateLimiter } from '../../utils/rateLimit.js';
import { submitTask } from '../task/submitTask.js';
import { adminAuth } from './adminAuth.js';
import { health } from './health.js';
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

// task
router.post(
  "/task/submit-task",
  validate(taskSubmitSchema),
  rateLimiter,
  adminAuth,
  submitTask,
);

// health
router.get(
  "/health",
  health
);

export default router;