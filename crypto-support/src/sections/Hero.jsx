import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          24/7 Crypto Support
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-gray-100 leading-relaxed">
          Get instant assistance with our rapid response team, powered by
          cutting-edge AI technology for 100% scam recovery assurance. Claim
          crypto prizes securely with exclusive coupon codes. Protect and
          maximize your investments with transparent, verified solutions
          available 24/7.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/wallets")}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Chat With Us Now.
          </button>
        </div>
      </div>
    </section>
  );
};
