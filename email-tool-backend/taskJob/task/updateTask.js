import prisma from "../../utils/prisma.js";

export const updateTask = async ({ userId, taskId, reward }) => {
  
  await prisma.task.update({
    where: {id: taskId },
    data: { status: "COMPLETED" },
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      balance: {
        increment: reward,
      },
    },
  });
};
