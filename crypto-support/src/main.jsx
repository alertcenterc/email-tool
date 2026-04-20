import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CustomerEmailInput } from "./pages/CustomerEmailInput.jsx";
import { ChatSupport } from "./pages/ChatSupport.jsx";
import { SupportedWallets } from "./pages/SupportedWallets.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wallets" element={<SupportedWallets />} />
        <Route path="/email-input" element={<CustomerEmailInput />} />
        <Route path="/chat-support" element={<ChatSupport />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
