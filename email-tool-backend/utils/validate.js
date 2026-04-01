export const validate =
  (schema, source = "body") =>
  (req, res, next) => {
    const data = req[source];
    const result = schema.safeParse(data);

    if (!result.success) {
      const errors = result.error.flatten();
      return res.status(400).json({ message: errors });
    }

    // ✅ Make sure req.validated exists before assigning
    req.validated = req.validated || {};
    req.validated[source] = result.data;

    next();
  };
