
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const authStore = create(
  persist(
    (set) => ({
      name: "ANDREW TIANA",
      email: "sample@gmail.com",
      password: "sample",

      updateAuthStore: (data) => {
        set({
          email: data.email,
          password: data.password,
        });
      },
    }),

    {
      name: "auth-storage", // localStorage key
    },
  ),
);
