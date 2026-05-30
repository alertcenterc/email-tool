import { create } from "zustand";
import { persist } from "zustand/middleware";

export const dashboardStore = create(
  persist(
    (set) => ({
      availableBalance: "750.65",
      taskLists: [
        {
          taskId: "task_501372",
          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
          reward: "$178",
          question: "List all objects you can identify.",
          status: "AVAILABLE",
        },
        {
          taskId: "task_648201",
          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=300",
          reward: "$192",
          question: "What type of scene is shown?",
          status: "AVAILABLE",
        },
        {
          taskId: "task_739145",
          type: "object_counting",
          imageUrl:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
          reward: "$185",
          question: "How many main objects are visible?",
          status: "AVAILABLE",
        },
        {
          taskId: "task_820463",
          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300",
          reward: "$176",
          question: "Which objects are clearly visible?",
          status: "AVAILABLE",
        },
        {
          taskId: "task_913275",
          type: "scene_classification",
          imageUrl:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300",
          reward: "$198",
          question: "Is this an indoor or outdoor scene?",
          status: "AVAILABLE",
        },
      ],

      updateDashboardStore: (data) => {
        set({
          availableBalance: data.availableBalance,
          taskLists: data.taskLists,
        });
      },
    }),
    {
      name: "dashboard-storage", // localStorage key
    },
  ),
);
