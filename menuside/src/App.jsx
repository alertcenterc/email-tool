import { Routes, Route } from "react-router-dom";
import { Roxie } from "./pages/Roxie";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Roxie />} />
       
      </Routes>
    </>
  );
}
