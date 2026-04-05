import { sendEmail } from "./services/sendEmail.js";

export const sendMail = async (req, res) => {

  const { email, name, amount } = req.validated.body;

  try {

    // send email
    const result = sendEmail({ email, name, amount });

    if (!result.success) {
      return res.status(403).json({
        success: false, 
        message: result.message,
      });
    };

    return res.status(200).json({
      success: true,
      message: result.message,
    });

  } catch (error) {
  console.log(error.message)
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};