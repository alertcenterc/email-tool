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
import LandingPage from "./pages/others/LandingPage";
import MainDashboard from "./pages/dashboard/MainDashboard";


export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainDashboard />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/verifyOtp" element={<VerifyOTP />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="logout" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* /admin/dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* /admin/task pae */}
          <Route path="task-page" element={<TaskPage />} />
          <Route path="task-list" element={<TaskList />} />
          <Route path="task-completed" element={<TaskCompleted />} />

          {/* /admin/task withdraw */}
          <Route path="withdraw-method" element={<SelectWithdrawalMethod />} />
          <Route path="withdraw-page" element={<WithdrawPage />} />
          <Route path="withdraw-locked" element={<WithdrawalLocked />} />

          {/* /admin/task suport */}
          <Route path="support" element={<FastSupportPage />} />

          {/* /admin → redirect to /admin/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </>
  );
}
