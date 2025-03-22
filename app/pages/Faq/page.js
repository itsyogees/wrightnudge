"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { FaBars, FaTimes } from "react-icons/fa";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    mobileNo: "",
    email: "",
    companyName: "",
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormValues({ name: "", mobileNo: "", email: "", companyName: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const questions = [
    {
      question:
        "1. What makes WRIGHTS different from traditional training programs?",
      answer:
        "WRIGHTS goes beyond standard training by focusing on 360-degree behavioral feedback and delivering AI-powered, personalized nudges. These nudges seamlessly integrate into employees’ daily workflows, driving real, lasting behavioral changes instead of temporary improvements.",
    },
    {
      question: "2. How do the AI-powered nudges work?",
      answer:
        "The AI analyzes 360-degree feedback and personality insights to craft personalized nudges. These nudges are sent at optimal times during the workday to ensure relevance and impact, promoting self-driven behavioral improvement.",
    },
    {
      question: "3. Will this disrupt the employee’s workflow?",
      answer:
        "No, the nudges are designed to fit naturally into employees’ workflows. They are non-intrusive and aim to enhance productivity by addressing behaviors without taking employees away from their tasks.",
    },
    {
      question: "4. How are training outcomes measured?",
      answer:
        "We measure what matters—the behavioral changes that colleagues observe and experience. These outcomes reflect real-world improvements in how employees collaborate, communicate, and lead, making them more impactful than traditional feedback forms.",
    },
    {
      question: "5. Who receives the behavioral insights?",
      answer:
        "Behavioral insights are shared exclusively with the employees attending the training. This approach ensures confidentiality, empowering them to focus on self-improvement without the pressure of external evaluations.",
    },
    {
      question:
        "6. Can WRIGHTS training be tailored to specific organizational needs?",
      answer:
        "Yes, WRIGHTS is highly customizable. We can align our training with your organizational goals, specific employee roles, and industry requirements to ensure maximum relevance and effectiveness.",
    },
    {
      question: "7. What kind of behaviors does WRIGHTS focus on improving?",
      answer:
        "WRIGHTS focuses on improving critical workplace behaviors like leadership, accountability, inclusivity, collaboration, and many others. These behaviors are identified through 360-degree feedback and are tailored to individual and organizational needs to drive meaningful growth.",
    },
    {
      question: "8. What industries and roles does WRIGHTS cater to?",
      answer:
        "Our program is versatile and caters to various sectors, from IT and manufacturing to education and healthcare. It's effective across all roles, from entry-level employees to senior management.",
    },
    {
      question:
        "9. How long does it take to see results from WRIGHTS training?",
      answer:
        "Typically, employees start noticing improvements within 4 to 6 weeks, as the nudges create incremental behavioral changes. However, the timeline can vary based on individual and organizational dynamics.",
    },
    {
      question: "10. How does WRIGHTS ensure confidentiality and trust?",
      answer:
        "We keep all behavioral feedback and insights private and share them only with the respective employees. By removing HR evaluations from the process, we build trust and encourage genuine self-improvement.",
    },
    {
      question: "11. Can employees track their own progress?",
      answer:
        "Yes, employees receive insights into their progress, including their standing on specific behavioral dimensions and where they fall in the training group's bell curve. This helps them set clear goals for improvement.",
    },
    {
      question: "12. What is the role of HR managers in this program?",
      answer:
        "HR managers play a crucial role in the success of the program. They identify key stakeholders such as reportees, peers, collaborators, and bosses for each candidate attending the training. HR also has access to a dedicated dashboard to track survey responses, ensuring timely participation. Additionally, the dashboard provides insights into email and nudge engagement, allowing HR to follow up with employees who haven't interacted with the content. By taking these steps, HR ensures active participation and reinforces the idea that behavioral change is a shared responsibility.",
    },
    {
      question: "13. I have more questions!",
      answer:
        "We'd love to help! Shoot us an email at Britto@wrights.ai or book a demo to learn more about how our work may be of value to your business..",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq">
        <div className="faqContainer">
          <div className="faqContent">
            <h2>Got Questions? We've Got ANSWERS</h2>
            <p>
              Clarify every doubt and learn how WRIGHTS transforms employee
              behavior. Discover the science behind our nudges, data-driven
              insights, and AI-powered solutions right here.
            </p>
            <button className="bookDemo-btn"  onClick={toggleModal}>Book a Demo</button>
          </div>
        </div>
      </div>
      <div className="faqContentContainer">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleFAQ(index)}
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <span>{item.question}</span>
              <MdKeyboardArrowDown
                className={`faq-arrow ${
                  activeIndex === index ? "faq-rotate" : ""
                }`}
              />
            </button>
            <p
              className={`faq-answer ${
                activeIndex === index ? "faq-show" : ""
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <FaTimes className="closeIcon" onClick={toggleModal} />
            <h2>Book a Demo</h2>
            <form>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="mobileNo"
                value={formValues.mobileNo}
                onChange={handleInputChange}
                placeholder="Mobile No"
              />
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email ID"
              />
              <input
                type="text"
                name="companyName"
                value={formValues.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
              <div className="modalButtons">
                <button type="button" onClick={toggleModal}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Faq;
