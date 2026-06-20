import { create } from "zustand";
import { persist } from "zustand/middleware";

export const withdrawStore = create(
  persist(
    (set) => ({
      amount: "10.00",
      walletName: "10.00",
      walletAddress: "10.00",
      activateWalletAddress: "10.00",
      walletLabel: "Account",
      walletplaceholder: "placeholder",

      updateWithdrawStore: (data) => {
        set({
          amount: data.amount,
          walletAddress: data.walletAddress,
        });
      },

      updateWalletNameStore: (
        dataName,
        dataActivateWalletAddress,
        walletLabel,
        walletplaceholder,
      ) => {
        set({
          walletName: dataName,
          activateWalletAddress: dataActivateWalletAddress,
          walletLabel,
          walletplaceholder,
        });
      },
    }),
    {
      name: "withdraw-storage", // localStorage key
    },
  ),
);
