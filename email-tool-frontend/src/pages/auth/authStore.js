
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const authStore = create(
  persist(
    (set) => ({
      email: "email",

      updateAuthStore: (data) => {
        set({
          email: data,
        });
      },
    }),

    {
      name: "auth-storage", // localStorage key
    },
  ),
);
