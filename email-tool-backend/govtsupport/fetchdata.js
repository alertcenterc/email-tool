import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const fetchdata = async (req, res) => {
  try {
    // create  new
    const fakeUsers = await prisma.support.findMany();

    return res.status(200).json({
      success: true,
      fakeUsers,
      message: "Generated them for you boss.",
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
