import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      // main user data
      userData: {
        bankAccountName: null,
        bankAccountNumber: "",
        bankName: null,
        createdAt: "2026431Z",
        deviceSession: {},
        email: "use.com",
        firstName: "Boss",
        id: "0910f1",
        isBankDetailsAdded: false,
        isPinDetailsAdded: false,
        isProfileCompleted: false,
        isReferralRewardActivated: true,
        kycCreatedAt: null,
        kycFirstName: "notReady",
        kycLastName: "notReady",
        kycPassed: false,
        kycStatus: "PENDING",
        lastName: "Boss",
        phone: "",
        phoneOtpVerificationNeeded: false,
        referralCode: "",
        status: "ACTIVE",
        updatedAt: "",

        activityLogs: [],
        transactions: [],

        userVirtualCard: {},
        wallet: {},
      },
      
      updateUserData: (data) => {
        const { userData, otpStore } = data;
        set({
         userData, otpStore
        });
      },
    }),
    {
      name: "admin-users-storage", // localStorage key
    },
  ),
);
