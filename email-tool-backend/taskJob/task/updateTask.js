import prisma from "../../utils/prisma.js";

export const updateTask = async ({ userId, taskId, reward }) => {

  await prisma.user.update({
    where: { id: userId },
    data: {
      balance: {
        increment: reward,
      },
    },
  });

  await prisma.task.update({
    where: { taskId },
    data: { status: "COMPLETED" },
  });

};
