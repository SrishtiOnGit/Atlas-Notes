import FeatureCard from "/src/components/features.jsx";
import "./featurescard.css";

const features = [
  {
    icon: "📮",
    title: "Daily Postcard",
    description: "A new destination every day."
  },
  {
    icon: "🎲",
    title: "Random Discovery",
    description: "Travel anywhere instantly."
  },
  {
    icon: "🌦",
    title: "Weather Insights",
    description: "See local weather conditions."
  },
  {
    icon: "🗺",
    title: "Interactive Maps",
    description: "Locate every destination."
  },
  {
    icon: "🗣",
    title: "Local Phrases",
    description: "Learn greetings worldwide."
  },
  {
    icon: "❤️",
    title: "Save Favorites",
    description: "Build your collection."
  }
];

const Features = () => {
  return (
    <section className="features">

      <h2>Why Atlas Notes?</h2>

      <div className="features-grid">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>

    </section>
  );
};

export default Features;