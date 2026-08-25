import prisma from "../taskJob/auth/prisma.js";

// main signup handler
export const fetchdata = async (req, res) => {
  const { profileId } = req.validated.body;

  try {
    const [views, textMeClicks, totalViews, totalClicks] = await Promise.all([
      prisma.view.count({
        where: { profileId },
      }),

      prisma.click.count({
        where: {
          profileId,
        },
      }),

      prisma.view.count(),
      
      prisma.click.count(),
    ]);

    return res.status(200).json({
      success: true,
      views,
      textMeClicks,
      totalViews,
      totalClicks,
      message: "Generated them for you boss.",
    });

  } catch (error) {
    //log error activity
    await prisma.caseactivity.create({
      data: {
        email: "test",
        message: error.message,
      },
    });

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
