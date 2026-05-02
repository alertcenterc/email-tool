import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SendPayment from "./pages/SendPayment.jsx";
import { PaymentReceipt } from "./pages/PaymentReceipt.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/send-payment" element={<SendPayment />} />
        <Route path="/payment-receipt" element={<PaymentReceipt />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
