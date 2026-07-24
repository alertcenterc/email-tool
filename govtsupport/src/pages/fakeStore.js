
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const fakeStore = create(
  persist(
    (set) => ({
      fakeUsers: [
        {
          id: "aabbccdd",

          phone: "1230001212",
          type: "Business",
          when: "Business",
          amount: "Business",
          employment: "Business",

          street: "Business",
          city: "Business",
          state: "Business",
          zipcode: "Business",

          firstname: "Business",
          lastname: "Business",
          age: "Business",
          email: "Business",
          
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
      name: "fakeUserrrs-storage", // localStorage key
    },
  ),
);
