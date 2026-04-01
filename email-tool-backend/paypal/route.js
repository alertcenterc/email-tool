import express from 'express';
const router = express.Router();
import { validate } from "../utils/validate.js";
import { sendEmail } from './zod.js';
import { rateLimiter } from '../utils/rateLimit.js';
import { sendMail } from './controller.js';

router.post(
  "/send-email",
  validate(sendEmail),
  rateLimiter,
  sendMail
);

export default router;