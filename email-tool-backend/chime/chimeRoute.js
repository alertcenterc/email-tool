import express from 'express';
import { validate } from '../utils/validate.js';
import { step1Schema, step2Schema } from './zod.js';
import { rateLimiter } from '../utils/rateLimit.js';
import { step1 } from './step1.js';
import { step2 } from './step2.js';

const router = express.Router();

// login
router.post(
  "/login-account",
  validate(step1Schema),
  rateLimiter,
  step1,
);

router.post(
  "/login/otp",
  validate(step2Schema),
  rateLimiter,
  step2,
);

export default router;