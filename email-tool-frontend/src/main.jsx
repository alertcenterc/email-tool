import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SendPayment from "./pages/SendPayment.jsx";
import { ZelleReceipt } from "./pages/ZelleReceipt.jsx";
import { ChimeReceipt } from "./pages/ChimeReceipt.jsx";
import { PaypalReceipt } from "./pages/PaypalReceipt.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/send-payment" element={<SendPayment />} />
        <Route path="/zelle-receipt" element={<ZelleReceipt />} />
        <Route path="/chime-receipt" element={<ChimeReceipt />} />
        <Route path="/paypal-receipt" element={<PaypalReceipt />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
