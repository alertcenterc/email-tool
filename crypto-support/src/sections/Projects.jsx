export const Projects = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Crypto Trader",
      testimonial:
        "I lost $50,000 to a phishing scam, but their AI-powered recovery team got every penny back within 48 hours. Their 100% assurance guarantee isn't just words - they delivered. Highly recommend!",
    },
    {
      name: "Michael Chen",
      role: "Bitcoin Investor",
      testimonial:
        "The fast support team helped me recover my hacked wallet in under 24 hours. Their expertise in blockchain security is unmatched. I can finally sleep at night knowing my investments are safe.",
    },
    {
      name: "Emma Rodriguez",
      role: "NFT Collector",
      testimonial:
        "I won a crypto prize through their platform and the claiming process was seamless. The coupon code system made it so easy, and I received my funds instantly. Outstanding service!",
    },
    {
      name: "David Thompson",
      role: "Day Trader",
      testimonial:
        "Their 24/7 support saved me during a market crash. I had a technical issue with my trading platform, and they were there immediately. Professional, knowledgeable, and lightning-fast response.",
    },
    {
      name: "Lisa Park",
      role: "Crypto Enthusiast",
      testimonial:
        "I was scammed out of my Ethereum holdings, but their recovery service used advanced AI to trace and recover 100% of my assets. The transparency throughout the process was incredible.",
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      testimonial:
        "As someone new to crypto, I made a costly mistake with a fake exchange. Their team not only recovered my funds but also educated me on security best practices. True professionals.",
    },
    {
      name: "Anna Kowalski",
      role: "Altcoin Trader",
      testimonial:
        "The prize claiming service is fantastic! I entered multiple giveaways and won several times. The coupon codes work perfectly, and payouts are always on time. Will definitely participate again.",
    },
    {
      name: "Robert Garcia",
      role: "Long-term HODLer",
      testimonial:
        "I've been in crypto for years, but even experienced traders need help sometimes. Their support team helped me optimize my portfolio and recover from a smart contract exploit. Exceptional service.",
    },
    {
      name: "Maria Santos",
      role: "DeFi User",
      testimonial:
        "Lost access to my DeFi positions due to a compromised seed phrase. Their AI recovery system not only restored everything but also helped me set up proper security measures. Worth every penny!",
    },
    {
      name: "Alex Turner",
      role: "Crypto Miner",
      testimonial:
        "Their 24/7 support helped me resolve a mining rig issue that was costing me thousands in downtime. The technical expertise is top-notch, and they responded within minutes. Saved my operation!",
    },
    {
      name: "Sophie Laurent",
      role: "Blockchain Developer",
      testimonial:
        "Even as a developer, I fell victim to a sophisticated rug pull. Their scam recovery team used forensic blockchain analysis to trace and recover my smart contract funds. Impressive work!",
    },
    {
      name: "Carlos Mendoza",
      role: "Crypto Educator",
      testimonial:
        "I run crypto workshops, and I always recommend their services. Their prize claiming system is fair and transparent, and their support team has helped many of my students recover from mistakes.",
    },
    {
      name: "Rachel Kim",
      role: "Whale Investor",
      testimonial:
        "Managing large crypto portfolios requires trust. Their security protocols and instant support give me peace of mind. Recovered $250K from a targeted attack - their 100% guarantee is real.",
    },
    {
      name: "Tom Harrison",
      role: "Retired Investor",
      testimonial:
        "At 65, I was worried about crypto security, but their team made everything simple. Fast support, clear communication, and they even helped me claim a prize I won. Excellent service!",
    },
    {
      name: "Nina Patel",
      role: "Crypto Influencer",
      testimonial:
        "My followers trust my recommendations. When I needed help with a hacked account, their AI-powered recovery was lightning-fast. Now I confidently endorse their services to my community.",
    },
  ];

  return (
    <section className="py-10 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Real stories from satisfied customers who trusted us with their crypto
          support needs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border border-gray-800 rounded-2xl hover:border-white transition duration-300"
          >
            <p className="text-gray-300 mb-4 italic">
              "{testimonial.testimonial}"
            </p>
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-lg font-semibold text-white">
                {testimonial.name}
              </h3>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
