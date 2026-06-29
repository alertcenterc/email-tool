import { create } from "zustand";
import { persist } from "zustand/middleware";

export const dashboardStore = create(
  persist(
    (set) => ({
      // scam data
      firstName: "John Doe",
      paymentMethod: "scam payment",
      scamType: "scam payment",
      amount: "50000.71",
      caseId: "SCM45356",

      updateCaseStore: (data) => {
        set({
          firstName: data.firstName,
          paymentMethod: data.paymentMethod,
          scamType: data.scamType,
          amount: data.amount,
          caseId: data.caseId,
        });
      },
    }),

    {
      name: "new-dashboard-storage", // localStorage key
    },
  ),
);
