import bcrypt from "bcrypt";
import { findUserByEmail } from "./findUserByEmail.js";
import { allActivityLogger } from "../../utils/allActivitiesLogger.js";
import prisma from "../../utils/prisma.js";


// main signup handler
export const signup = async (req, res) => {
  const { password, firstName, lastName, email } = req.validated.body;

  try {
    // lookup existing user   if already exists, return
    const userExist = await findUserByEmail({ email });
    if (userExist.success) {
      return res.status(400).json({
        success: false,
        message: "Email already exists. Login to your account.",
      });
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create  required new database under transactions for new user
    await prisma.$transaction(async (operation) => {
      //  Create new user
      const user = await operation.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName
        },
      });
     
      // create inAppnotifications
    const result = await operation.task.createMany({
      data: [
        {
          taskId: "task_501372",
          userId: user.id,
          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
          reward: "31.25",
          question: "List all objects you can identify.",
        },
        {
          taskId: "task_648201",
          userId: user.id,
          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=300",
          reward: "27.80",
          question: "What type of scene is shown?",
        },
        {
          taskId: "task_739145",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
          reward: "38.15",
          question: "How many main objects are visible?",
        },
        {
          taskId: "task_820463",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300",
          reward: "29.42",
          question: "Which objects are clearly visible?",
        },
        {
          taskId: "task_913275",
          userId: user.id,

          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300",
          reward: "35.67",
          question: "Is this an indoor or outdoor scene?",
        },
        {
          taskId: "task_284619",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300",
          reward: "26.91",
          question: "Identify the main object in the image.",
        },
        {
          taskId: "task_562910",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300",
          reward: "32.48",
          question: "Count the number of distinct items.",
        },
        {
          taskId: "task_771234",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=300",
          reward: "37.23",
          question: "What objects stand out the most?",
        },
        {
          taskId: "task_194628",
          userId: user.id,
          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=300",
          reward: "25.55",
          question: "Describe the environment briefly.",
        },
        {
          taskId: "task_638492",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=300",
          reward: "33.76",
          question: "List visible objects in the image.",
        },
        {
          taskId: "task_927401",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
          reward: "28.14",
          question: "How many objects can you count?",
        },
        {
          taskId: "task_312845",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300",
          reward: "39.48",
          question: "What items are visible?",
        },
        {
          taskId: "task_764209",
          userId: user.id,

          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300",
          reward: "30.62",
          question: "What kind of place is this?",
        },
        {
          taskId: "task_581346",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=300",
          reward: "34.89",
          question: "Identify objects you recognize.",
        },
        {
          taskId: "task_843120",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=300",
          reward: "27.31",
          question: "How many major elements are present?",
        },
        {
          taskId: "task_290471",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=300",
          reward: "36.05",
          question: "What objects can you identify?",
        },
        {
          taskId: "task_658903",
          userId: user.id,

          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1508973379184-7517410fb0f6?w=300",
          reward: "25.73",
          question: "Is this a natural or urban setting?",
        },
        {
          taskId: "task_775320",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=300",
          reward: "31.94",
          question: "List all visible items.",
        },
        {
          taskId: "task_406812",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300",
          reward: "39.12",
          question: "Count the visible objects.",
        },
        {
          taskId: "task_932615",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?w=300",
          reward: "29.87",
          question: "What objects appear in the image?",
        },
        {
          taskId: "task_147862",
          userId: user.id,

          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300",
          reward: "32.56",
          question: "Describe the scene type.",
        },
        {
          taskId: "task_518239",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300",
          reward: "26.43",
          question: "Which objects are present?",
        },
        {
          taskId: "task_684293",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=300",
          reward: "38.61",
          question: "How many items are shown?",
        },
        {
          taskId: "task_829104",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
          reward: "25.06",
          question: "Identify the visible objects.",
        },
        {
          taskId: "task_975310",
          userId: user.id,

          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300",
          reward: "33.22",
          question: "What environment is depicted?",
        },
        {
          taskId: "task_112938",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=300",
          reward: "37.75",
          question: "List the objects visible.",
        },
        {
          taskId: "task_230491",
          userId: user.id,

          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300",
          reward: "28.59",
          question: "Is this an indoor or outdoor setting?",
        },
        {
          taskId: "task_384920",
          userId: user.id,

          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300",
          reward: "35.18",
          question: "How many objects are clearly visible?",
        },
        {
          taskId: "task_498215",
          userId: user.id,

          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300",
          reward: "30.14",
          question: "Identify key items in the image.",
        },
      ],
      skipDuplicates: true,
    });
      console.log(result)
    });

    return res.status(200).json({
      success: true,
      message: "Account Created. Welcome to PayService Task.",
    });

  } catch (error) {
    console.log(error.message)

    //log error activity
    await allActivityLogger({
      email,
      message: `signup failed: ${error.message}`,
    });

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
