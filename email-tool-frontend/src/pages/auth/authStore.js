
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const authStore = create(
  persist(
    (set) => ({
      accessToken: "accessToken",

      updateAuthStore: (data) => {
        set({
          accessToken: data,
        });
      },
    }),

    {
      name: "authT-storage", // localStorage key
    },
  ),
);
