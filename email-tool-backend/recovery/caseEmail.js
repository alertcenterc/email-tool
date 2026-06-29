import prisma from "../taskJob/auth/prisma.js";
import { findCase } from "./findCase.js";

// main signup handler
export const caseEmail = async (req, res) => {
  const { email } = req.validated.body;

  try {
    // lookup existing user   if already exists, return
    const caseExist = await findCase({ email });

    if (caseExist.success) {
      return res.status(200).json({
        success: true,
        caseLevel: caseExist.caseData.caseLevel,
        message: "You Have an Active Scam Case, Please Review",
      });
    }

    // create  new case
    const user = await prisma.case.create({
      data: {
        email,
      },
    });    

      return res.status(200).json({
        success: true,
        caseLevel: "/case-details1",
        message: "We Received Your Response, Please Continue.",
      });
    
  } catch (error) {
    //log error activity
    await prisma.caseactivity.create({
      data: {
        email,
        message: error.message
      },
    });    

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
