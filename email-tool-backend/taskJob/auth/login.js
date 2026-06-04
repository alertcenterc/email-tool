import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByEmail } from "./findUserByEmail.js";
import { fetchTaskAndBalance } from "../task/fetchTaskAndBalance.js";
import { allActivityLogger } from "../../utils/allActivitiesLogger.js";

export const login = async (req, res) => {
  // compute login input credentials
  const { email } = req.validated.body;
  const inputPassword = req.validated.body.password;

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
         email,
         message: "logged in",
       });
   

    // fetch data
    const taskAndBalance = await fetchTaskAndBalance({userId: id});

    // sign jwt
    const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //log  activity
    await allActivityLogger({
      email,
      message: "sucessful login",
    });

    return res.status(200).json({
      success: true,
      accessToken,
      taskAndBalance,
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