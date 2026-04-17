import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CustomerOTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const canResend = resendTimer === 0;
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [resendTimer]);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const digits = pastedData.split("").filter((char) => /\d/.test(char));

    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });
    setOtp(newOtp);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    if (nextEmptyIndex !== -1 && nextEmptyIndex < 6) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter all 6 digits of the OTP");
      return;
    }

    if (!/^\d{6}$/.test(otpString)) {
      setError("OTP must contain only numbers");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate OTP verification
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would verify the OTP with your backend
      console.log("OTP verified:", otpString);

      // Store user email in localStorage for chat
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        localStorage.setItem("verifiedEmail", userEmail);
      }

      // Redirect to chat support
      navigate("/chat-support", { replace: true });
    } catch {
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendTimer(30);
    setError("");

    try {
      // Simulate resend request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("OTP resent");
    } catch {
      setError("Failed to resend OTP. Please try again.");
    }
  };

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
            Verify Your Email
          </h1>
          <p className="text-gray-400">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
        >
          {/* OTP Input Fields */}
          <div className="mb-6">
            <div className="flex justify-center space-x-3 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-2xl font-bold bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white"
                  disabled={isLoading}
                />
              ))}
            </div>
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-white mb-1">
                  Secure Verification
                </h4>
                <p className="text-xs text-gray-400">
                  OTP codes are valid for 10 minutes and can only be used once.
                  Never share your verification code with anyone.
                </p>
              </div>
            </div>
          </div>

          {/* Resend OTP */}
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-400 mb-2">
              Didn't receive the code?
            </p>
            {canResend ? (
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-orange-500 hover:text-orange-400 text-sm font-medium transition duration-300"
              >
                Resend OTP
              </button>
            ) : (
              <p className="text-sm text-gray-500">Resend in {resendTimer}s</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || otp.join("").length !== 6}
            className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying...
              </div>
            ) : (
              "Continue to Support Chat"
            )}
          </button>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate("/email-input")}
              className="text-gray-400 hover:text-orange-500 text-sm transition duration-300"
            >
              ← Change Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
