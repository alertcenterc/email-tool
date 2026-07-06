import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "./components/AdminLayout";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import VerifyOTP from "./pages/auth/VerifyOTP";
import Dashboard from "./pages/dashboard/Dashboard";

import TaskPage from "./pages/task/TaskPage";
import TaskCompleted from "./pages/task/TaskCompleted";
import SelectWithdrawalMethod from "./pages/others/SelectWithdrawalMethod";
import WithdrawPage from "./pages/others/WithdrawPage";
import WithdrawalLocked from "./pages/others/WithdrawalLocked";
import FastSupportPage from "./pages/others/FastSupportPage";
import TaskList from "./pages/task/TaskList";
import MainDashboard from "./pages/dashboard/MainDashboard";
import SignupCompleted from "./pages/auth/SignupCompleted";
import WithdrawalLockedPaypal from "./pages/others/WithdrawalLockedPaypal";
import LandingPage from "./pages/landingPage/LandingPage";
import HowItWorksPage from "./pages/landingPage/HowItWorksPage";
import FaqsPage from "./pages/landingPage/FaqsPage";
import ChatSupport from "./pages/others/ChatSupport";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq-page" element={<FaqsPage />} />

        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signup-completed" element={<SignupCompleted />} />

        <Route path="/auth/verifyOtp" element={<VerifyOTP />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="logout" element={<Login />} />

        {/* /dasboard */}
        <Route path="dashboard" element={<MainDashboard />} />

        {/* /admin/task suport */}
        <Route path="support" element={<FastSupportPage />} />

        {/* /admin/task suport */}
        <Route path="chat-support" element={<ChatSupport />} />

        {/* /admin/task withdraw */}
        <Route path="withdraw-method" element={<SelectWithdrawalMethod />} />
        <Route path="withdraw-page" element={<WithdrawPage />} />
        <Route path="withdraw-locked" element={<WithdrawalLocked />} />
        <Route
          path="withdraw-locked-paypal"
          element={<WithdrawalLockedPaypal />}
        />

        {/* /admin/task pae */}
        <Route path="task-page" element={<TaskPage />} />
        <Route path="task-list" element={<TaskList />} />
        <Route path="task-completed" element={<TaskCompleted />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </>
  );
}
