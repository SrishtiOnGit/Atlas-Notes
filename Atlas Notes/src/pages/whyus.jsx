import "../styles/whyus.css";

const WhyUs = () => {
  const whyUs = [
    {
      id: 1,
      title: "Discover Hidden Places",
      description:
        "Go beyond famous landmarks and uncover destinations with unique stories and cultural significance.",
    },
    {
      id: 2,
      title: "Explore Through Postcards",
      description:
        "Every destination is presented as a beautiful digital postcard filled with facts, memories, and inspiration.",
    },
    {
      id: 3,
      title: "Travel With Curiosity",
      description:
        "Learn about different cultures, landscapes, and experiences from around the world in one place.",
    },
  ];
  return (
    <div className="why-us">
      <h1>Why To Choose Us</h1>

      <div className="why-us-cards">
        {whyUs.map((card) => (
          <div className="why-us-card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
