import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByEmail } from "./findUserByEmail.js";

export const login = async (req, res) => {
  // compute login input credentials
  const { password, email } = req.validated.body;

  try {
    // lookup existing user
    const user = await findUserByEmail({ email });
    // if unknown user, return
    if (!user.success) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Email or Password" });
    }

    // destructure user data
    const { password, balance, id } = user;

    // password check
    const isMatch = await bcrypt.compare(inputPassword, password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    // Successful login
    await allActivityLogger({
      type: "AUTH",
      data: `Successful login by phone: ${phone}`,
      description: "logged in successfully",
    });

    // sign jwt
    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //log  activity
    await allActivityLogger({
      email,
      message: "sucessful login",
    });

    res.cookie("admin_access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Welcome back!",
    });
  } catch (error) {

    //log error activityy
    await allActivityLogger({
      email,
      message: `login failed: ${error.message}`,
    });

    return res
      .status(500)
      .json({ success: false, message: "Login failed, try again." });
  }
};