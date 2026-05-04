import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ZelleReceipt } from "./pages/ZelleReceipt.jsx";
import { ChimeReceipt } from "./pages/ChimeReceipt.jsx";
import { PaypalReceipt } from "./pages/PaypalReceipt.jsx";

import PayPalPayment from "./pages/PayPalPayment.jsx";
import ZellePayment from "./pages/ZellePayment.jsx";
import ChimePayment from "./pages/ChimePayment.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/paypal-payment" element={<PayPalPayment />} />
        <Route path="/zelle-payment" element={<ZellePayment />} />
        <Route path="/chime-payment" element={<ChimePayment />} />

        <Route path="/zelle-receipt" element={<ZelleReceipt />} />
        <Route path="/chime-receipt" element={<ChimeReceipt />} />
        <Route path="/paypal-receipt" element={<PaypalReceipt />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
