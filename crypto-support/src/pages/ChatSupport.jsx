import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CRISP_WEBSITE_ID = "30ef0ba9-d531-477d-8ece-42ba40d7f564";
const ALLOWED_ROUTES = ["/chat-support"];

export const ChatSupport = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const syncCrispData = () => {
    if (!window.$crisp) return;

    const email = localStorage.getItem("userEmail");
    const wallet = localStorage.getItem("selectedWallet");
    const fullData = `${email} - wallet: ${wallet}`

    if (email) {
      window.$crisp.push(["set", "user:email", fullData]);
    }

    if (wallet) {
      window.$crisp.push(["set", "user:company", wallet]);
      window.$crisp.push(["set", "session:data", [["wallet", wallet]]]);
    }
  };

  useEffect(() => {
    if (window.CRISP_LOADED) return;

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;

    script.onload = () => {
      window.CRISP_LOADED = true;
      syncCrispData();
      window.$crisp.push(["do", "chat:open"]);
    };

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (window.CRISP_LOADED) {
      syncCrispData();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!window.$crisp) return;

    const isAllowed = ALLOWED_ROUTES.includes(location.pathname);

    window.$crisp.push(["do", isAllowed ? "chat:show" : "chat:hide"]);
  }, [location.pathname]);

  const handleChatClick = () => {
    window.$crisp?.push(["do", "chat:open"]);
  };

  // ✅ THIS WAS MISSING
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Need Help?</h2>

        <button
          onClick={handleChatClick}
          className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Open Chat
        </button>

        <button
          onClick={() => navigate("/")}
          className="block mt-4 text-gray-400"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
