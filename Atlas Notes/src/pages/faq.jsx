import "../styles/faq.css";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Atlas Notes?",
      answer:
        "Atlas Notes is a travel-inspired platform where you can discover beautiful destinations through interactive digital postcards featuring stunning images and interesting facts.",
    },
    {
      question: "Do I need an account to explore destinations?",
      answer:
        "No, you can explore destinations and view postcards without creating an account.",
    },
    {
      question: "Can I save my favorite postcards?",
      answer:
        "Yes! Simply click the save button to add postcards to your personal favorites collection.",
    },
    {
      question: "Are the stories and facts accurate?",
      answer:
        "We strive to provide engaging and informative facts about every destination, sourced from reliable travel information.",
    },
    {
      question: "Is Atlas Notes free to use?",
      answer:
        "Yes! Atlas Notes is free to explore and collect digital postcards.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{item.question}</h3>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>

          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
