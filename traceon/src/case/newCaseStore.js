import { create } from "zustand";
import { persist } from "zustand/middleware";

export const newCaseStore = create(
  persist(
    (set) => ({

      // user email
      email: "you@example.com",
      updateEmailStore: (data) => {
        set({
          email: data,
        });
      },

      // scam data
      scamType: "example scam",
      paymentMethod: "scam payment",
      amount: "50000.71",
      updateScamDetails1Store: (data) => {
        set({
          scamType: data.scamType,
          paymentMethod: data.paymentMethod,
          amount: data.amount
        });
      },


    }),

    {
      name: "new-case-storage", // localStorage key
    },
  ),
);
