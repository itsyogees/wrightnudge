"use client";
import { useEffect, useRef, useState } from 'react';
import { TbView360Number } from "react-icons/tb";

import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Solution = () => {
  const [activeTab, setActiveTab] = useState("TailoredOutcomes");
  const [formValues, setFormValues] = useState({
    name: "",
    mobileNo: "",
    email: "",
    companyName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormValues({ name: "", mobileNo: "", email: "", companyName: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBarClick = (tab) => {
    setActiveTab(tab);
  };

  const [activeSecTab, setActiveSecTab] = useState("AssessmentDiagnostics");

  const handleTabSecClick = (tab) => {
    setActiveSecTab(tab);
  };

  const handleBarSecClick = (tab) => {
    setActiveSecTab(tab);
  };

  const contentData = {
    TailoredOutcomes: {
      text: "We address your most pressing organizational issues with laser-focused solutions.",
      image: "/image/solution3.png",
    },
    MeasuredSuccess: {
      text: " Clear, quantifiable metrics track improvements in teamwork, productivity, and employee engagement.",
      image: "/image/solution3.png",
    },
    EmbeddedLearning: {
      text: " Ongoing reinforcement ensures skills and behaviors stay with employees long after workshops end.",
      image: "/image/solution3.png",
    },
    CollaborativeApproach: {
      text: "We work closely with your internal stakeholders so that solutions align with your company’s culture and goals.",
      image: "/image/solution3.png",
    },
  };
  const contentDataSec = {
    AssessmentDiagnostics: {
      text: "In-depth analysis of your current work culture, team dynamics, and leadership frameworks.",
      image: "/image/solution1.png",
    },
    CustomizedActionPlan: {
      text: "Development of targeted strategies, workshops, coaching sessions, and supportive Nudges to drive positive behavior",
      image: "/image/solution1.png",
    },
    ImplementationReinforcement: {
      text: "Hands-on guidance, interactive sessions, and continuous follow-up to ensure behavioral changes take root.",
      image: "/image/solution1.png",
    },
    OngoingEvaluation: {
      text: " Pre and post training evaluation to measure progress, gather feedback, and refine solutions for continuous improvement.",
      image: "/image/solution1.png",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderContent = [
    {
      review:
        "Wrights has improved our campaign ROI by helping us move from guesswork to making informed decisions.",
      name: "Sam",
      position: "Manager",
      sales: "3",
      engagement: "Increase in Sales Engagement",
    },
    {
      review:
        "Their solutions have streamlined our processes, saving us both time and resources.",
      name: "Emma",
      position: "Director",
      sales: "5",
      engagement: "Improvement in Team Efficiency",
    },
    {
      review:
        "An exceptional experience with excellent customer support and results.",
      name: "Liam",
      position: "CEO",
      sales: "2",
      engagement: "Boost in Overall Productivity",
    },
  ];

  const handleNavigation = (index) => {
    setCurrentSlide(index);
  };
  const [fadeOut, setFadeOut] = useState(false);

  const handlePrevSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? sliderContent.length - 1 : prev - 1
      );
      setFadeOut(false);
    }, 400);
  };

  const handleNextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === sliderContent.length - 1 ? 0 : prev + 1
      );
      setFadeOut(false);
    }, 400);
  };
  useEffect(() => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
    }, 400);
  }, [currentSlide]);

  const [isVisibleH, setIsVisibleH] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleH(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);



  const sectionObserverRef = useRef(null);  
  const [isSectionVisible, setSectionVisible] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.2 }  
    );

    if (sectionObserverRef.current) {
      observer.observe(sectionObserverRef.current);
    }

    return () => {
      if (sectionObserverRef.current) {
        observer.unobserve(sectionObserverRef.current);
      }
    };
  }, []);


  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');  
          } else {
            entry.target.classList.remove('animate');  
          }
        });
      },
      { threshold: 0.2 }  
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);







  const sectionObserverRefSec = useRef(null);  
  const [isSectionVisibleSec, setSectionVisibleSec] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisibleSec(true);
        }
      },
      { threshold: 0.2 }  
    );

    if (sectionObserverRefSec.current) {
      observer.observe(sectionObserverRefSec.current);
    }

    return () => {
      if (sectionObserverRefSec.current) {
        observer.unobserve(sectionObserverRefSec.current);
      }
    };
  }, []);



  
  const sectionRefHome = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRefHome.current) {
      observer.observe(sectionRefHome.current);
    }

    return () => {
      if (sectionRefHome.current) {
        observer.unobserve(sectionRefHome.current);
      }
    };
  }, []);


  const aboutSubRef = useRef(null);
 
  useEffect(() => {  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutSubRef.current.querySelectorAll(".productSection3Container");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="solution">
        <div className="solutionContainer">
          <div className="solutionContent">
            <h2>
              Comprehensive Solutions for Sustainable <span>BEHAVIOURAL</span>{" "}
              Change
            </h2>
            <p>
              Empower your workforce with targeted interventions and data-driven
              insights to foster a culture of continuous improvement and growth.
            </p>
            <button className="bookDemo-btn"  onClick={toggleModal}>Book a Demo</button>
          </div>
        </div>
      </div>
      <div className="solutinSection1" ref={sectionRef}>
      <div className="solutinSection1Container">
        <p>
          At WRIGHTS Training & Consulting, we offer end-to-end solutions that
          address your organization's unique challenges. From diagnostics to
          personalized interventions, our goal is to drive meaningful,
          long-term improvements in the way your teams think and work.
        </p>
      </div>
    </div>
     
      <div
      className='productSection4'
      ref={aboutSubRef}
    >
        <div className="productSection3Container">
          <div className="productSection3Head">
            <h2>Our Methodology</h2>
          </div>
          <div className="aboutSection2Container">
            <div className="aboutSection2Img">
              <img
                src={contentDataSec[activeSecTab].image}
                alt={activeSecTab}
              />
            </div>
            <div className="aboutSection2Content">
              <p>{contentDataSec[activeSecTab].text}</p>
            </div>
          </div>
          <div className="aboutSection2Tabs">
            <div
              className={`tab ${
                activeSecTab === "AssessmentDiagnostics" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("AssessmentDiagnostics")}
            >
            Assessment & Diagnostics
            </div>
            <div
              className={`tab ${
                activeSecTab === "CustomizedActionPlan" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("CustomizedActionPlan")}
            >
             Customized Action Plan
            </div>
            <div
              className={`tab ${
                activeSecTab === "ImplementationReinforcement" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("ImplementationReinforcement")}
            >
            Implementation & Reinforcement
            </div>
            <div
              className={`tab ${
                activeSecTab === "OngoingEvaluation" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("OngoingEvaluation")}
            >
               Ongoing Evaluation
            </div>
          </div>
          <div className="aboutSection2Bar">
            <div
              className="bar1"
              style={{
                backgroundColor:
                  activeSecTab === "AssessmentDiagnostics"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("AssessmentDiagnostics")}
            ></div>
            <div
              className="bar2"
              style={{
                backgroundColor:
                  activeSecTab === "CustomizedActionPlan"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("CustomizedActionPlan")}
            ></div>
            <div
              className="bar3"
              style={{
                backgroundColor:
                  activeSecTab === "ImplementationReinforcement"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("ImplementationReinforcement")}
            ></div>
            <div
              className="bar4"
              style={{
                backgroundColor:
                  activeSecTab === "OngoingEvaluation"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("OngoingEvaluation")}
            ></div>
          </div>
        </div>
      </div>
      <div className="productSection3">
        <div className="productSection2Head">
          <h2>Key Focus Areas</h2>
        </div>
        <div className="productSection2Container">
          <div className="productSection2CotentMain">
          <div className="productSection2Cotent">
            <div className="section2Head">
              <h2>
              Self
              </h2>
            </div>
            <div className="section2Cotent">
              <p>
              Empowering Personal Growth: We guide employees to develop a growth mindset, enhancing their overall confidence and competence.
              </p>
              <p>
              Mindset & Behavior Change: Our solutions target individual attitudes and habits, helping people become more self-aware, motivated, and proactive in their roles.
              </p>
            </div>
          </div>
          <div className="productSection2Cotent">
            <div className="section2Head">
              <h2>
              Team
              </h2>
            </div>
            <div className="section2Cotent">
              <p>
              Collaborative Problem-Solving: Instead of fixing issues for them, we help teams learn how to identify and resolve problems together, ensuring everyone takes ownership.
              </p>
              <p>
              Fostering Belonging: By encouraging open communication and mutual support, team members feel valued, united, and inspired to perform at their best.
              </p>
            </div>
          </div>
          <div className="productSection2Cotent">
            <div className="section2Head">
              <h2>
               Culture / Ecosystem
              </h2>
            </div>
            <div className="section2Cotent">
              <p>
              Building Psychological Safety: We help create an environment where people feel safe to voice concerns, share new ideas, and ask for help without fear of judgment.
              </p>
              <p>
              Enabling Healthy Dynamics: Through structured interventions and continued support, we nurture a culture that promotes respect, transparency, and collective growth.
              </p>
            </div>
          </div>
              
          </div>
        
          <div className="productSection2Img">
            <img src="/image/about4.jpeg" alt="" />
          </div>
        </div>
      </div>
     <div
      className={`productSection2 ${isSectionVisible ? 'animate' : ''}`}
      ref={sectionObserverRef}
    >
        <div className="productSection3Container">
          <div className="productSection3Head">
            <h2> Benefits of Our Solutions</h2>
          </div>
          <div className="aboutSection2Container">
            <div className="aboutSection2Content">
              <p>{contentData[activeTab].text}</p>
            </div>
            <div className="aboutSection2Img">
              <img src={contentData[activeTab].image} alt={activeTab} />
            </div>
          </div>
          <div className="aboutSection2Tabs">
            <div
              className={`tab ${
                activeTab === "TailoredOutcomes" ? "active" : ""
              }`}
              onClick={() => handleTabClick("TailoredOutcomes")}
            >
              Tailored Outcomes
            </div>
            <div
              className={`tab ${
                activeTab === "MeasuredSuccess" ? "active" : ""
              }`}
              onClick={() => handleTabClick("MeasuredSuccess")}
            >
              Measured Success
            </div>
            <div
              className={`tab ${
                activeTab === "EmbeddedLearning" ? "active" : ""
              }`}
              onClick={() => handleTabClick("EmbeddedLearning")}
            >
              Embedded Learning
            </div>
            <div
              className={`tab ${
                activeTab === "CollaborativeApproach" ? "active" : ""
              }`}
              onClick={() => handleTabClick("CollaborativeApproach")}
            >
              Collaborative Approach
            </div>
          </div>
          <div className="aboutSection2Bar">
            <div
              className="bar1"
              style={{
                backgroundColor:
                  activeTab === "TailoredOutcomes"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("TailoredOutcomes")}
            ></div>
            <div
              className="bar2"
              style={{
                backgroundColor:
                  activeTab === "MeasuredSuccess"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("MeasuredSuccess")}
            ></div>
            <div
              className="bar3"
              style={{
                backgroundColor:
                  activeTab === "EmbeddedLearning"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("EmbeddedLearning")}
            ></div>
            <div
              className="bar4"
              style={{
                backgroundColor:
                  activeTab === "CollaborativeApproach"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("CollaborativeApproach")}
            ></div>
          </div>
        </div>
      </div>

      <div ref={ref} className={`homeSection4 ${isVisibleH ? "animate" : ""}`}>
        <div className="homeSection4Container">
          <div className="homeSection4Content">
            <div className="homeSection4ContentContainer">
              <img src="/image/homeSection41.png" alt="" />
              {/* <div className="section4Contents">
                <div className="section4Content">
                  <IoMdCheckmarkCircleOutline />
                  <p>LinkedIn Marketing Partner</p>
                </div>
                <div className="section4Content">
                  <IoMdCheckmarkCircleOutline />
                  <p>GDPR & SOC2 Type II</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="homeSection4Content">
            <div className="homeSection4ContentContainer">
              <h2>See Wrights in Action</h2>
              <p>
                Schedule a personalized demo or sign up to get started for free
              </p>
              <div className="homeSection4ContentBtn">
                <button className="btn"  onClick={toggleModal}>Book a Demo</button>
                <button className="cancle">Try for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionRefHome} className="homeSection5 fadeIn">
        <div className="homeSection5Container">
          <div className="homeSection5Head">
            <h2>Hear From Our Clients</h2>
          </div>
          <div className={`homeSection5Content ${fadeOut ? "fade-out" : ""}`}>
            <div className="homeSection5ContentReview">
              <div className="section5Review2">
                <img src="/image/logo.png" alt="Logo" />
                <h2>“{sliderContent[currentSlide].review}”</h2>
                <div className="section5Review2Text">
                  <img src="/image/review.png" alt="Reviewer" />
                  <div className="section5Text">
                    <p>{sliderContent[currentSlide].name}</p>
                    <span>{sliderContent[currentSlide].position}</span>
                  </div>
                </div>
              </div>
              <div className="section5Review1">
                <p>“</p>
              </div>
            </div>
            <div className="homeSection5ContentTestimenal">
              <div className="testimoalContent">
                <h2>
                  {sliderContent[currentSlide].sales}
                  <span>x</span>
                </h2>
                <p>{sliderContent[currentSlide].engagement}</p>
                <button className="btn"  onClick={toggleModal}>Book a Demo</button>
              </div>
            </div>
          </div>
          <div className="homeSection5Controls">
            <div className="dots">
              {sliderContent.map((_, index) => (
                <span
                  key={index}
                  className={currentSlide === index ? "dot active" : "dot"}
                  onClick={() => handleNavigation(index)}
                ></span>
              ))}
            </div>
            <div className="buttons">
              <button className="prev" onClick={handlePrevSlide}>
                &lt;
              </button>
              <button className="next" onClick={handleNextSlide}>
                &gt;
              </button>
            </div>
          </div>
        </div>
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

export default Solution;
