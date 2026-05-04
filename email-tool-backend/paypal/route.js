import express from 'express';
const router = express.Router();
import { validate } from "../utils/validate.js";
import { sendEmail } from './zod.js';
import { rateLimiter } from '../utils/rateLimit.js';
import { paypalController } from './paypalController.js';
import { zelleController } from './zelleController.js';
import { chimeController } from './chimeController.js';

router.post("/paypal", validate(sendEmail), rateLimiter, paypalController);

router.post("/zelle", validate(sendEmail), rateLimiter, zelleController);

router.post("/chime", validate(sendEmail), rateLimiter, chimeController);

export default router;