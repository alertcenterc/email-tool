import { Routes, Route } from "react-router-dom";
import { Roxie } from "./pages/Roxie";
import MenuSideLanding from "./pages/MenuSideLanding";
import { Emily } from "./pages/Emily";
import { Lucy } from "./pages/Lucy";
import { Leah } from "./pages/Leah";
import { Amelia } from "./pages/Amelia";
import { Hannah } from "./pages/Hannah";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MenuSideLanding />} />
        <Route path="/roxie" element={<Roxie />} />
        <Route path="/emily" element={<Emily />} />
        <Route path="/lucy" element={<Lucy />} />
        <Route path="/leah" element={<Leah />} />
        <Route path="/amelia" element={<Amelia />} />
        <Route path="/hannah" element={<Hannah />} />
      </Routes>
    </>
  );
}
