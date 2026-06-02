import { create } from "zustand";
import { persist } from "zustand/middleware";

export const taskStore = create(
  persist(
    (set) => ({
      task: {
        taskId: "task_501372",
        type: "object_identification",
        imageUrl:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
        reward: "$178",
        question: "List all objects you can identify.",
        status: "AVAILABLE",
        details: "read the text carefully and answer the question.",
      },

      updateTaskStore: (data) => {
        set({
          task: data,
        });
      },
    }),
    {
      name: "task-storage", // localStorage key
    },
  ),
);
