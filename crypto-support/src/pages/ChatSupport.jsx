import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TAWK_SRC = "https://embed.tawk.to/69e6bf7344c3731c357f8fa8/1jmmlnn5l";

export const ChatSupport = () => {
  const navigate = useNavigate();
  const tawkReady = useRef(false);

  // ✅ MOVE THIS UP
  const setUserData = () => {
    const email = localStorage.getItem("user_email");
    const walletType = localStorage.getItem("wallet_type");

    if (!window.Tawk_API || !tawkReady.current) return;

    window.Tawk_API.setAttributes(
      {
        email: email || "",
        walletType: walletType || "unknown",
      },
      (error) => {
        if (error) console.error("Tawk attribute error:", error);
      },
    );
  };

  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = () => {
      tawkReady.current = true;
      setUserData(); // ✅ now safe
    };

    const script = document.createElement("script");
    script.src = TAWK_SRC;
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const handleOpenChat = () => {
    if (!tawkReady.current) {
      console.log("Tawk not ready yet");
      return;
    }

    window.Tawk_API.showWidget();
    window.Tawk_API.maximize();
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-3">
          Talk to our support team instantly.
        </h2>

        <button
          onClick={handleOpenChat}
          className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600"
        >
          Open Live Chat
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-4 text-sm text-gray-500 hover:text-white"
        >
          Go back
        </button>
      </div>
    </div>
  );
};
