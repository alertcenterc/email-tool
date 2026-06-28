import { create } from "zustand";
import { persist } from "zustand/middleware";

export const dashboardStore = create(
  persist(
    (set) => ({

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
      name: "new-dashboard-storage", // localStorage key
    },
  ),
);
