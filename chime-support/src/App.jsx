import { Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import { ChimeLogin } from "./pages/ChimeLogin";
import ChimeOTP from "./pages/ChimeOTP";
import FraudSupport from "./pages/FraudSupport";

export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#062923",
            color: "#fff",
            border: "1px solid #2de28a",
          },
        }}
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<ChimeLogin />} />
        <Route path="/chime-otp" element={<ChimeOTP />} />
        <Route path="/fraud-support" element={<FraudSupport />} />
      </Routes>
    </>
  );
}
