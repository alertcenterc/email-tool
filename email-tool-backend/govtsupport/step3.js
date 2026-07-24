import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const step3 = async (req, res) => {
  const { phone, firstname, lastname, age, email } = req.validated.body;

  try {
    // create  new
    await prisma.support.update({
      where: { phone },
      data: { firstname, lastname, age, email },
    });

    return res.status(200).json({
      success: true,
      message: "Saved!",
    });
  } catch (error) {
    //log error activity
    await prisma.caseactivity.create({
      data: {
        email: phone,
        message: error.message,
      },
    });

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
