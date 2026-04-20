import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CustomerEmailInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Store email in localStorage
    localStorage.setItem("userEmail", email);

    // Redirect to OTP verification
    navigate("/chat-support");

    // Store email in localStorage
    localStorage.setItem("userEmail", email);

    // Redirect to OTP verification
    navigate("/chat-support");

  };;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <svg
              className="w-12 h-12 text-orange-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.638 14.904c-1.28 1.821-4.481 6.449-10.638 6.449-11.023 0-12.419-9.084-12.419-9.084l2.034-1.764c-.105-2.007.291-3.686.291-3.686s2.317 1.507 7.279 1.507c5.665 0 8.538-3.964 8.538-3.964s.57 2.621-.159 5.624l1.841 1.773c-.666.381-1.231.823-1.231.823s.279 1.473.279 3.457c0 2.093-.32 3.875-.32 3.875s1.04 1.073 1.04 2.82c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to CryptoSupport
          </h1>
          <p className="text-gray-400">
            Enter your email to start a secure support session.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className=" rounded-2xl p-8 border border-gray-800"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-500 transition duration-300"
              placeholder="your@email.com"
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>

          {/* Security Notice */}
          <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-white mb-1">
                  Secure & Private
                </h4>
                <p className="text-xs text-gray-400">
                  Your email is encrypted and used only for support purposes. We
                  never share your information with third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          > Continue to Support Chat
          </button>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </form>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-gray-400 hover:text-orange-500 text-sm transition duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};
