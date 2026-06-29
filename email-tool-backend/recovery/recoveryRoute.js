import express from 'express';
import { validate } from '../utils/validate.js';
import { rateLimiter, uploadRateLimiter } from '../utils/rateLimit.js';
import { caseEmail } from './caseEmail.js';
import { caseDetails1Schema, caseDetails2Schema, caseDetails3Schema, caseEmailSchema } from './zod.js';
import { caseDetails1 } from './caseDetails1.js';
import { caseDetails2 } from './caseDetails2.js';
import { caseDetails3 } from './caseDetails3.js';
import { validateImages } from '../utils/validateImages.js';
import upload from '../utils/multerConfig.js';

const router = express.Router();

// case email route
router.post(
  "/case/email",
  validate(caseEmailSchema),
  rateLimiter,
  caseEmail,
);

router.post(
  "/case/details-1",
  validate(caseDetails1Schema),
  rateLimiter,
  caseDetails1,
);

router.post(
  "/case/details-2",
  upload.array("images", 10), // 1️⃣ Multer parses multipart form (images + fields)
  validate(caseDetails2Schema), // 2️⃣ Validate fields from req.body
  uploadRateLimiter, // 4️⃣ Optional: throttle abuse
  validateImages, // 5️⃣ Optional: validate image count, type, size
  caseDetails2, // 6️⃣ Controller: upload images to Cloudinary + process
);

router.post(
  "/case/details-3",
  validate(caseDetails3Schema),
  rateLimiter,
  caseDetails3,
);

export default router;