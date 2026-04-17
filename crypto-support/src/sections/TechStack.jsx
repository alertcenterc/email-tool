export const TechStack = () => {
  const stacks = [
    {
      title: "Frontend",
      value: "React, React Native Expo",
    },
    {
      title: "Backend",
      value: "Node.js, Express",
    },
    {
      title: "Database",
      value: "MongoDB, PostgreSQL",
    },
    {
      title: "Infrastructure",
      value: "Vercel, Docker, Cloud Services",
    },
  ];

  return (
    <section className="py-20 px-3 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="p-6 border border-gray-800 rounded-2xl hover:border-white transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{stack.title}</h3>
            <p className="text-gray-300 mb-2">
              {stack.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
