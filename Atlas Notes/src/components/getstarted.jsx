import "../styles/getstarted.css";

const GetStarted = () => {
  const steps = [
    {
      id: 1,
      title: "Open A Postcard",
      description: "Open a postcard and start your journey.",
    },
    {
      id: 2,
      title: "Read It's Story",
      description: "Explore the story of the postcard.",
    },
    {
      id: 3,
      title: "Explore the Hidden Places",
      description: "Discover hidden places and learn more about them.",
    },
    {
      id: 4,
      title: "Continue Exploring",
      description: "Continue exploring the world with Atlas Notes.",
    },
  ];
  return (
    <div className="get-started">
      <h1>How To Get Started</h1>
      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.id}>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
