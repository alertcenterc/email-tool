
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const authStore = create(
  persist(
    (set) => ({
      name: "ANDREW TIANA",
      email: " ",

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
