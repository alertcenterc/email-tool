import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const ChatSupport = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to CryptoSupport! 👋 How can we help you today?",
      sender: "support",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: messages.length + 2,
        text: "Thank you for your message. Our team will review it and get back to you shortly. Average response time is 2 minutes.",
        sender: "support",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, supportResponse]);
      setIsLoading(false);
    }, 1000);
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
              <path d="M23.638 14.904c-1.28 1.821-4.481 6.449-10.638 6.449-11.023 0-12.419-9.084-12.419-9.084l2.034-1.764c-.105-2.007.291-3.686.291-3.686s2.317 1.507 7.279 1.507c5.665 0 8.538-3.964 8.538-3.964s.57 2.621-.159 5.624l1.841 1.773c-.666.381-1.231.823-1.231.823s.279 1.473.279 3.457c0 2.093-.32 3.875-.32 3.875s1.04 1.073 1.04 2.82c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561z" />
            </svg>
            <div>
              <h1 className="font-bold text-lg">CryptoSupport</h1>
              <p className="text-xs text-gray-400">
                Online • 2 min avg response
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            ×
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg break-words ${
                message.sender === "user"
                  ? "bg-orange-500 text-white rounded-br-none"
                  : "bg-gray-800 text-gray-100 rounded-bl-none"
              }`}
              style={{ maxWidth: "85%" }}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-gray-900 border-t border-gray-800 p-4 fixed bottom-0 left-0 right-0">
        <form onSubmit={handleSendMessage} className="flex gap-2 mb-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type message..."
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-500 text-sm"
            disabled={isLoading}
            autoFocus
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white rounded-lg transition duration-300 font-semibold text-sm w-20"
          >
            Send
          </button>
        </form>
        <p className="text-xs text-gray-500 text-center">
          💬 24/7 Support • 🔒 Encrypted • ✅ 100% Guarantee
        </p>
      </div>
    </div>
  );
};
