import express from 'express';
import { validate } from '../utils/validate.js';
import { viewSchema } from './zod.js';
import { rateLimiter } from '../utils/rateLimit.js';
import { views } from './views.js';
import { clicks } from './clicks.js';
import { fetchdata } from './fetchdata.js';
import { sitevisits } from './sitevisits.js';
import { siteclicks } from './siteclicks.js';

const router = express.Router();

router.post("/views", validate(viewSchema), rateLimiter, views);

router.post("/clicks", validate(viewSchema), rateLimiter, clicks);

router.post("/sitev", validate(viewSchema), rateLimiter, sitevisits);

router.post("/sitec", validate(viewSchema), rateLimiter, siteclicks);

router.post("/count", validate(viewSchema), rateLimiter, fetchdata);

export default router;