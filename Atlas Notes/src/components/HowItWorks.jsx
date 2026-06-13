import "/src/Styles/HowItWorks.css";

const steps = [
  {
    number: "1️⃣",
    title: "Discover",
    description:
      "Open a postcard from somewhere on Earth."
  },
  {
    number: "2️⃣",
    title: "Explore",
    description:
      "Learn about culture, weather, and local facts."
  },
  {
    number: "3️⃣",
    title: "Collect",
    description:
      "Save postcards and build your travel collection."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">

      <h2>How It Works?</h2>

      <div className="timeline">

        {steps.map((step) => (
          <div className="step" key={step.title}>

            <div className="step-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HowItWorks;