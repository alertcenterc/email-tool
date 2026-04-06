import { sendEmail } from "./services/sendEmail.js";

export const sendMail = async (req, res) => {

  const { email, name, amount } = req.validated.body;

  try {

    // send email
    const result = await sendEmail({ email, name, amount });
    if (!result) {
      return res
        .status(400)
        .json({ success: false, message: "error sending message" });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {

  console.log(error.message);

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};