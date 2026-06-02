import prisma from "../../utils/prisma.js";

export const fetchTaskAndBalance = async ({userId}) => {

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        balance: true,
      },
    });

  const task = await prisma.task.findMany({
    where: { userId },
  });

  return {
    user,
    task,
  };
};
