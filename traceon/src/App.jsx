import { Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./landingPage/LandingPage";
import HowItWorksPage from "./landingPage/HowItWorksPage";
import FaqsPage from "./landingPage/FaqsPage";
import { CaseEmail } from "./case/CaseEmail";
import { CaseDetails1 } from "./case/CaseDetails1";
import { CaseDetails2 } from "./case/CaseDetails2";
import { CaseDetails3 } from "./case/CaseDetails3";
import CaseSubmitted from "./case/CaseSubmitted";
import Dashboard from "./dashboard/Dashboard";
import FastSupportPage from "./others/FastSupportPage";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<CaseDetails3/>} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq-page" element={<FaqsPage />} />

        <Route path="/case-email" element={<CaseEmail />} />
        <Route path="/case-details1" element={<CaseDetails1 />} />
        <Route path="/case-details2" element={<CaseDetails2 />} />
        <Route path="/case-details3" element={<CaseDetails3 />} />
        <Route path="/case-submitted" element={<CaseSubmitted />} />

        <Route path="/case-dashboard" element={<Dashboard />} />

        <Route path="/support" element={<FastSupportPage />} />

        {/* auth */}

        {/* dashboard */}
      </Routes>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </>
  );
}