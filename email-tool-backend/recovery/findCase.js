import prisma from "../taskJob/auth/prisma.js";

export const findCase = async ({ email }) => {
  const caseData = await prisma.case.findUnique({
    where: { email },
    select: {
      id: true,
      firstName: true,
      paymentMethod: true,
      scamType: true,
      amount: true,
      caseId: true,
      caseLevel: true,
    },
  });
  // if unknown , return
  if (!caseData) {
    return {
      success: false,
      message: "new email",
    };
  }

  return {
    success: true,
    caseData
  };
};
