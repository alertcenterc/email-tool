import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const views = async (req, res) => {
  const { profileId } = req.validated.body;

  try {
  
    // create  new
    await prisma.view.create({
      data: {
       profileId
      },
    });

    return res.status(200).json({
      success: true,
      message: "Saved!",
    });
    
  } catch (error) {
    //log error activity
    await prisma.caseactivity.create({
      data: {
        email: "views",
        message: error.message,
      },
    });

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
