
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
          createdAt: "2026-07-22T07:17:39.187Z",
          updatedAt: "2026-07-22T07:17:39.187Z",
        },
        {
          id: "bbbbccdd",
          email: "example2@gmail.com",
          password: "passwordIs2",
          otp: "123456",
          createdAt: "2026-07-22T07:17:39.187Z",
          updatedAt: "2026-07-22T07:17:39.187Z",
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
