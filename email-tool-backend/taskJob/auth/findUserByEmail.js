import prisma from "../../utils/prisma.js";

export const findUserByEmail = async ({email}) => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      balance: true,
    },
  });
  // if unknown user, return
  if (!user) {
    return {
      success: false,
      message: "Invalid Email",
    };
  };
  
  // destructre data
  const { id, password, firstName, lastName, balance } = user;

  return { success: true, id, email: user.email, firstName, lastName, password, balance };
};