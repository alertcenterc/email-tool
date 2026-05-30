import {
    Button,
    Stack,
  Typography,
} from "@mui/material";
import { userStore } from "./services/usersStore";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { Link, useNavigate } from "react-router-dom";



export default function UserFullData() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

  
  // states
  const userData = userStore((state) => state.userData);
  const {
    id,
    email,
    phone,
    createdAt,
    updatedAt,

    isBankDetailsAdded,
    bankName,
    bankAccountName,
    bankAccountNumber,

    status,
    phoneOtpVerificationNeeded,
    isReferralRewardActivated,

    isProfileCompleted,
    referralCode,
    firstName,
    lastName,
    isPinDetailsAdded,

    kycFirstName,
    kycLastName,
    kycPassed,
    kycStatus,
    kycCreatedAt,

    activityLogs,
    transactions,
    deviceSession,
    userVirtualCard,
    wallet,
  } = userData;

  // states
  const {
    deviceId,
    biometricLoginEnrolled,
    deviceBrand,
    deviceModel,
    osName,
    osVersion,
    ip,
  } = deviceSession;

  // activity log
  const activityColumns = [
    { field: "type", headerName: "Type", flex: 1 },
    { field: "data", headerName: "Data", flex: 1 },
    { field: "description", headerName: "Desc", flex: 1 },
    { field: "createdAt", headerName: "createdAt", flex: 1 },
  ];

  // transactions
  const transactionColumns = [
    { field: "transactionID", headerName: "TxnID", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "details", headerName: "Details", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "payout", headerName: "Payout", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "description", headerName: "Desc", flex: 1 },
    { field: "createdAt", headerName: "createdAt", flex: 1 },
  ];

  // wallets
  const {
    availableNairaBalance,
    availableRewardPoints,
    bep20WalletAddress,
    btcWalletAddress,
    trc20WalletAddress,
  } = wallet;

  //  virtual card
  const {
    customerId,
    cardId,
    cardStatus,
    cardCreatedAt,
    cardCreationReference,
    availableCardBalance,
    freezeStatus,
  } = userVirtualCard;


  // otp store
  const otpStore = userStore((state) => state.otpStore);

  // function to update account  status state and route to next page
  const updateAndRouteToAccountStatus = async () => {
    setIsLoading(true);
    try {
     return navigate("/admin/users/update-account-status");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <Typography variant="h4" fontWeight={"bold"} mb={3}>
        User ID: {id}
      </Typography>
      {/*basic info*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">Email: {email}</Typography>
        <Typography variant="h6">Phone: {phone}</Typography>
      </Stack>
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">CreatedAt: {createdAt}</Typography>
        <Typography variant="h6">UpdatedAt: {updatedAt}</Typography>
      </Stack>
      {/*wallet info*/}
      <Typography variant="h6" mb={3}>
        Available Balance: {availableNairaBalance}
      </Typography>
      <Typography variant="h6" mb={3}>
        Reward points: {availableRewardPoints}
      </Typography>
      <Typography variant="h6" mb={3}>
        BEP20 wallet: {bep20WalletAddress}
      </Typography>
      <Typography variant="h6" mb={3}>
        BTC wallet: {btcWalletAddress}
      </Typography>
      <Typography variant="h6" mb={3}>
        TRC20 wallet: {trc20WalletAddress}
      </Typography>
      {/*otp last created*/}
      <Typography variant="h6" mb={3}>
        Last OTP created: {otpStore.createdAt}
      </Typography>
      {/*status*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">Account Status: {status}</Typography>
        <Button variant="contained" onClick={updateAndRouteToAccountStatus}>
          Update Status
        </Button>
      </Stack>
      {/*OTP status*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">
          OTP Status: {phoneOtpVerificationNeeded}
        </Typography>
      </Stack>
      {/*Referal status*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">
          Referral Status: {isReferralRewardActivated}
        </Typography>
        <Button variant="contained" onClick={() => toast.success("yes ref")}>
          Update Referal Status
        </Button>
      </Stack>
      {/*bank data*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">
          Bank ?: {isBankDetailsAdded ? "true" : "false"}
        </Typography>
        <Typography variant="h6">Bank Name: {bankName}</Typography>
        <Typography variant="h6">AcctNo: {bankAccountNumber}</Typography>
        <Typography variant="h6">AcctName: {bankAccountName}</Typography>
      </Stack>
      {/*account profile info*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">
          Profile completed: {isProfileCompleted ? "true" : "false"}
        </Typography>
        <Typography variant="h6">Ref Code: {referralCode}</Typography>
        <Typography variant="h6">First Name: {firstName}</Typography>
        <Typography variant="h6">Last Name: {lastName}</Typography>
        <Typography variant="h6">
          Pin?: {isPinDetailsAdded ? "true" : "false"}
        </Typography>
      </Stack>
      {/*kyc info*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">KYC FirstName: {kycFirstName}</Typography>
        <Typography variant="h6">KYC LastName: {kycLastName}</Typography>
        <Typography variant="h6">Status: {kycStatus}</Typography>
        <Typography variant="h6">
          KYC passed: {kycPassed ? "true" : "false"}
        </Typography>
        <Typography variant="h6">CreatedAT: {kycCreatedAt}</Typography>
      </Stack>
      {/*device info*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">ID: {deviceId}</Typography>
        <Typography variant="h6">
          Biometric ?: {biometricLoginEnrolled ? "true" : "false"}
        </Typography>
        <Typography variant="h6">Brand: {deviceBrand}</Typography>
        <Typography variant="h6">Model: {deviceModel}</Typography>
        <Typography variant="h6">Os: {osName}</Typography>
        <Typography variant="h6">Os Version: {osVersion}</Typography>
        <Typography variant="h6">Ip: {ip}</Typography>
        <Typography variant="h6">
          UpdatedAt: {deviceSession.updatedAt}
        </Typography>
      </Stack>

      {/*virtual card*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">CardId: {cardId}</Typography>
        <Typography variant="h6">Card Created: {cardCreatedAt}</Typography>
        <Typography variant="h6">
          Create ref: {cardCreationReference}
        </Typography>
        <Typography variant="h6">Customer Id: {customerId}</Typography>
      </Stack>
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">Status: {cardStatus}</Typography>
        <Typography variant="h6">
          Card Balance: {availableCardBalance}
        </Typography>
        <Typography variant="h6">
          Freeze Status: {freezeStatus ? "true" : "false"}
        </Typography>
        <Typography variant="h6">
          UpdatedAt: {userVirtualCard.updatedAt}
        </Typography>
      </Stack>

      {/*activity logs*/}
      <Typography variant="h5" mb={3}>
        Activity logs
      </Typography>
      <DataGrid
        rows={activityLogs}
        columns={activityColumns}
        getRowId={(row) => row.id}
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
      />
      {/*transactions*/}
      <Typography variant="h5" mb={3}>
        Transactions
      </Typography>
      <DataGrid
        rows={transactions}
        columns={transactionColumns}
        getRowId={(row) => row.transactionID}
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
      />
            {isLoading && <SpinnerLoading message="loading" />}
      
    </>
  );
}
