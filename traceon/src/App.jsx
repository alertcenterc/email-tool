import { Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./landingPage/LandingPage";
import HowItWorksPage from "./landingPage/HowItWorksPage";
import FaqsPage from "./landingPage/FaqsPage";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq-page" element={<FaqsPage />} />

        {/* auth */}

        {/* dashboard */}
      </Routes>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </>
  );
}