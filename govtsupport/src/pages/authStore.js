
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const emailStore = create(
  persist(
    (set) => ({
      email: "email",

      updateEmailStore: (data) => {
        set({
          email: data,
        });
      },
    }),

    {
      name: "authNow-storage", // localStorage key
    },
  ),
);
