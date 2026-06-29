import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const caseDetails1 = async (req, res) => {
  const { email, scamType, paymentMethod, amount } = req.validated.body;

  try {

    // update case
    const user = await prisma.case.update({
      where: { email },
      data: { scamType, paymentMethod, amount },
    });

    return res.status(200).json({
      success: true,
      message: "We Received Your Case Information, Please Continue.",
    });

  } catch (error) {
    //log error activity
    await prisma.caseactivity.create({
      data: {
        email,
        message: error.message,
      },
    });

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
