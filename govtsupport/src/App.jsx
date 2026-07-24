import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./landingPage/HomePage";
import SupportTypePage from "./pages/SupportType";
import Eligibility from "./pages/Elegibility";
import LocationInfo from "./pages/LocationInfo";
import PersonalInfo from "./pages/PersonalInfo";
import Result from "./pages/Result";

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
        <Route path="/" element={<HomePage />} />
        <Route path="/support-type" element={<SupportTypePage />} />
        <Route path="/support-eligibility" element={<Eligibility />} />
        <Route path="/location-eligibility" element={<LocationInfo />} />
        <Route path="/personal-eligibility" element={<PersonalInfo />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}
