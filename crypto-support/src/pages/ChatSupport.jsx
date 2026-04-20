import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CRISP_WEBSITE_ID = "30ef0ba9-d531-477d-8ece-42ba40d7f564";

// Define where chat is allowed
const ALLOWED_ROUTES = ["/chat-support"];

export const ChatSupport = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Load Crisp once
  useEffect(() => {
    if (window.CRISP_LOADED) return;

    window.$crisp = window.$crisp || [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;

    script.onload = () => {
      window.CRISP_LOADED = true;
    };

    document.head.appendChild(script);
  }, []);

  // Set user email and selected wallet
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const wallet = localStorage.getItem("selectedWallet");
    if (!window.$crisp) return;

    if (email) {
      window.$crisp.push(["set", "user:email", email]);
    }
    if (wallet) {
      window.$crisp.push(["set", "session:data", [["wallet", wallet]]]);
    }
  }, []);

  // Control visibility based on route
  useEffect(() => {
    if (!window.$crisp) return;

    const isAllowed = ALLOWED_ROUTES.includes(location.pathname);

    if (isAllowed) {
      window.$crisp.push(["do", "chat:show"]);
    } else {
      window.$crisp.push(["do", "chat:hide"]);
    }
  }, [location.pathname]);

  const handleChatClick = () => {
    if (window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-orange-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.638 14.904c-1.28 1.821-4.481 6.449-10.638 6.449-11.023 0-12.419-9.084-12.419-9.084l2.034-1.764c-.105-2.007.291-3.686.291-3.686s2.317 1.507 7.279 1.507c5.665 0 8.538-3.964 8.538-3.964s.57 2.621-.159 5.624l1.841 1.773c-.666.381-1.231.823-1.231.823s.279 1.473.279 3.457c0 2.093-.32 3.875-.32 3.875s1.04 1.073 1.04 2.82c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561z" />
            </svg>
            <div>
              <h1 className="font-bold text-lg">CryptoSupport</h1>
              <p className="text-xs text-gray-400">
                150 active agents available
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white text-2xl transition"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
      </div>

      {/* Centered Chat Icon */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <button
            onClick={handleChatClick}
            className="group relative inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-110 hover:shadow-orange-500/40"
            aria-label="Open chat support"
          >
            <svg
              className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.05 1.05 4.42L2 22l5.58-1.05C9.95 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10zM8 10h2v2H8v-2zm0 4h8v2H8v-2z" />
            </svg>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Click to chat
            </div>
          </button>

          <p className="mt-6 text-lg font-semibold text-white">
            Click the chat icon above to start a conversation with our support
            team.
          </p>
        </div>
      </div>
    </div>
  );
};
