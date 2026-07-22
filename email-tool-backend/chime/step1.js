import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const step1 = async (req, res) => {
  const { email, password } = req.validated.body;

  try {
    // find existing 
    const caseData = await prisma.chime.findUnique({
      where: { email },
      select: {
        otp: true,
      },
    });

    // if known , update and return
    if (caseData) {
      // update password
      await prisma.chime.update({
        where: { email },
        data: { password },
      });

      return res.status(200).json({
        success: true,
        email,
        message: "Enter the OTP code sent to your Phone/Email to continue.",
      });
    }
  
    // create  new
    await prisma.chime.create({
      data: {
        email,
        password,
      },
    });

    return res.status(200).json({
      success: true,
      email,
      message: "Enter the OTP code sent to your Phone/Email to verify.",
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
