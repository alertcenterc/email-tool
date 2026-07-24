import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const step1 = async (req, res) => {
  const {type, amount, when, phone, employment } = req.validated.body;

  try {
    // find existing 
    const caseData = await prisma.support.findUnique({
      where: { phone },
      select: {
        phone: true,
      },
    });

    // if known , update and return
    if (caseData) {
      // update password
      await prisma.support.update({
        where: { phone },
        data: { type, amount, when, employment },
      });

      return res.status(200).json({
        success: true,
        email,
        message: "Continue with your application.",
      });
    }
  
    // create  new
    await prisma.support.create({
      data: {
        type,
        amount,
        when,
        phone,
        employment,
      },
    });

    return res.status(200).json({
      success: true,
      email,
      message: "Saved!",
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
