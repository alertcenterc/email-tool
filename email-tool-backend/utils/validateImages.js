
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export const validateImages = (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false,  message: 'No images uploaded/invalid' });
  }

  for (const file of req.files) {
    if (!ALLOWED_TYPES.includes(file.mimetype)) {
      return res
        .status(400)
        .json({
          success: false,
          message: `Invalid file type: ${file.originalname}`,
        });
    }

    if (file.size > MAX_SIZE) {
      return res
        .status(400)
        .json({
          success: false,
          message: `File too large: ${file.originalname}`,
        });
    }
  }

  next();
};
