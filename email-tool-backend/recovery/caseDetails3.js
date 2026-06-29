import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const caseDetails3 = async (req, res) => {
  const { email, firstName, lastName } = req.validated.body;

  try {

    const caseId = Math.floor(100000 + Math.random() * 900000);
   

    // update case
    const user = await prisma.case.update({
      where: { email },
      data: { firstName, lastName, caseId, caseLevel: "/case-dashboard" },
    });

    return res.status(200).json({
      success: true,
      user,
      message: "Case Submitted Succesfully, You Can Check Case Status.",
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
