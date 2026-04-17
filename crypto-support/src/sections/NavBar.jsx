import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-orange-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.638 14.904c-1.28 1.821-4.481 6.449-10.638 6.449-11.023 0-12.419-9.084-12.419-9.084l2.034-1.764c-.105-2.007.291-3.686.291-3.686s2.317 1.507 7.279 1.507c5.665 0 8.538-3.964 8.538-3.964s.57 2.621-.159 5.624l1.841 1.773c-.666.381-1.231.823-1.231.823s.279 1.473.279 3.457c0 2.093-.32 3.875-.32 3.875s1.04 1.073 1.04 2.82c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561s.279 1.28.279 2.561c0 1.636-.279 2.561-.279 2.561z" />
          </svg>
          <h1 className="text-xl font-bold text-white">CryptoSupport</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-orange-500 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition duration-300">
            Testimonials
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition duration-300">
            About
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/email-input")}
          className="hidden md:block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition duration-300"
        >
          Chat With Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li className="hover:text-orange-500 transition duration-300">
              Home
            </li>
            <li className="hover:text-orange-500 transition duration-300">
              Services
            </li>
            <li className="hover:text-orange-500 transition duration-300">
              Testimonials
            </li>
            <li className="hover:text-orange-500 transition duration-300">
              About
            </li>
            <button
              onClick={() => navigate("/email-input")}
              className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition duration-300"
            >
              Chat With Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};
