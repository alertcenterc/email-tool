import { create } from "zustand";
import { persist } from "zustand/middleware";

export const dashboardStore = create(
  persist(
    (set) => ({
      user: { balance: "10.00", firstName: "Elon" },
      withdrawHistory: [],
      task: [
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
          taskId: "task_501362",
          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
          reward: "$178",
          question: "List all objects you can identify.",
          status: "AVAILABLE",
        },
        {
          taskId: "task_501392",
          type: "object_identification",
          imageUrl:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
          reward: "$178",
          question: "List all objects you can identify.",
          status: "AVAILABLE",
        },
      ],

      updateDashboardStore: (data) => {
        set({
          user: data.user,
          task: data.task,
        });
      },

      updateWithdrawalHistoryStore: (data) => {
        set({
          withdrawHistory: data,
        });
      },
    }),
    {
      name: "dashboard-storage", // localStorage key
    },
  ),
);
