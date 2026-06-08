import { allActivityLogger } from "../../utils/allActivitiesLogger.js";
import { updateTask } from "./updateTask.js";
import prisma from "../../utils/prisma.js";

export const withdraw = async (req, res) => {
  // compute  input credentials
  const { amount, method } = req.validated.body;
  const id = req.id;

  try {

    // create
    await prisma.withdrawHistory.create({
      data: {
        userId: id,
        amount,
        method,
      },
    });

    // fetch withdrawal history data
    const withdrawHistory = await prisma.withdrawHistory.findMany({
      where: { userId: id },
    });

    return res.status(200).json({
      success: true,
      withdrawHistory,
      message: "Withdrawal Request Submitted",
    });

  } catch (error) {
    //log error activityy
    await allActivityLogger({
      email: id,
      message: `withdrawal submited failed: ${error.message}`,
    });
    return res
      .status(500)
      .json({ success: false, message: "Failed to submit Withdrawal Request, try again." });
  }
};