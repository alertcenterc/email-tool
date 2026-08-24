import { Routes, Route } from "react-router-dom";
import { Roxie } from "./pages/Roxie";
import MenuSideLanding from "./pages/MenuSideLanding";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MenuSideLanding />} />
        <Route path="/roxie" element={<Roxie />} />
      </Routes>
    </>
  );
}
