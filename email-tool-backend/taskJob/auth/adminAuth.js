import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  const token = req.cookies.admin_access_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.id = decoded.id;

    next();
  } catch (error) {

    return res.status(401).json({
      message: "Session expired, please login",
    });
  }
};
