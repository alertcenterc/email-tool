export const Services = () => {
  const services = [
    {
      title: "Fast Support Assistance",
      description:
        "Get instant help with our rapid response team available 24/7 for all your cryptocurrency needs, from transactions to technical issues.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "AI-Powered Scam Recovery",
      description:
        "Recover your assets from scams with 100% assurance using cutting-edge AI technology that detects and resolves fraudulent activities securely.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Crypto Prize Claiming",
      description:
        "Claim your crypto prizes effortlessly with exclusive coupon codes. We ensure secure and transparent prize distribution for all winners.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Crypto Assistance Services
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Comprehensive cryptocurrency support solutions designed to protect and
          enhance your digital asset experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-800 rounded-2xl hover:border-white transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
