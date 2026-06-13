import { useState } from "react";
import "/src/Styles/faq.css";

const faqs = [
  {
    question: "What is Atlas Notes?",
    answer:
      "Atlas Notes is a travel discovery platform that helps users explore destinations through digital postcards."
  },
  {
    question: "Can I save postcards?",
    answer:
      "Yes! You can build your own collection of favorite destinations."
  },
  {
    question: "What is Random Discovery?",
    answer:
      "Random Discovery instantly takes you to a surprise destination from anywhere in the world."
  },
  {
    question: "Is Atlas Notes free?",
    answer:
      "Yes, Atlas Notes is completely free to explore."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq">
      <h1>Frequently Asked Questions</h1>

      {faqs.map((item, index) => (
        <div className="faq-card" key={index}>
          <button
            className="faq-question"
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            {item.question}
          </button>

          {active === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;