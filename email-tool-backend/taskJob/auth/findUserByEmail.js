import prisma from "../../utils/prisma.js";

export const findUserByEmail = async ({email}) => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name,
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
  const { id, email, password, name, balance } = user;

  return { success: true, id, email, name,  password, balance };
};