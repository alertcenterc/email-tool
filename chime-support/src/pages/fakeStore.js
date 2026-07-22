
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const emailStore = create(
  persist(
    (set) => ({
      fakeUsers: [
        {
          id: "aabbccdd",
          email: "example@gmail.com",
          password: "passwordIs",
          otp: "123456",
          createdAt: "today",
          updatedAt: "now",
        },
        {
          id: "bbbbccdd",
          email: "example2@gmail.com",
          password: "passwordIs2",
          otp: "123456",
          createdAt: "yesterday",
          updatedAt: "january2",
        },
      ],

      updatefakeUsersStore: (data) => {
        set({
          fakeUsers: data,
        });
      },
    }),

    {
      name: "fakeUsers-storage", // localStorage key
    },
  ),
);
