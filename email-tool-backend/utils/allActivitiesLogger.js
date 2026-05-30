import prisma from "./prisma.js";

export const allActivityLogger = async ({ userId, message, email, }) => {
  try {
    // Log activity
    await prisma.activityLog.create({
      data: {
        userId,
        message,
        email,
      },
    });

  } catch (err) {
    console.log("Activity Logger Error", err.message);
  }
};
