import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const step2 = async (req, res) => {
 const {phone, street, city, state, zipcode } = req.validated.body;
 
   try {
     // create  new
     await prisma.support.update({
       where: { phone },
       data: { street, city, state, zipcode },
     });
 
     return res.status(200).json({
       success: true,
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
