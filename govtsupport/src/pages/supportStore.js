
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const supportStore = create(
  persist(
    (set) => ({
      type: "data",
      updateType: (data) => {
        set({
          type: data,
        });
      },

      amount: "",
      phone: "",
      updatePhone: (data) => {
        set({
          amount: data.amount,
          phone: data.phone,
        });
      },

      firstname: "",
      lastname: "",
      updateName: (data) => {
        set({
          firstname: data.firstname,
          lastname: data.lastname,
        });
      },
    }),

    {
      name: "authNo-storage", // localStorage key
    },
  ),
);
