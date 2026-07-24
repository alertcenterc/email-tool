import express from 'express';
import { validate } from '../utils/validate.js';
import { step1Schema, step2Schema, step3Schema } from './zod.js';
import { rateLimiter } from '../utils/rateLimit.js';
import { step1 } from './step1.js';
import { step2 } from './step2.js';
import { fetchdata } from './fetchdata.js';
import { step3 } from './step3.js';

const router = express.Router();

router.post("/apply", validate(step1Schema), rateLimiter, step1);

router.post("/location", validate(step2Schema), rateLimiter, step2);

router.post("/personal", validate(step3Schema), rateLimiter, step3);

router.get("/fake-testing", rateLimiter, fetchdata);

export default router;