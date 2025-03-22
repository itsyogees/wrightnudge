"use client";
import { useEffect, useRef, useState } from "react";
import { TbView360Number } from "react-icons/tb";

import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Product = () => {
  const [activeTab, setActiveTab] = useState("IdentifyGaps");
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
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBarClick = (tab) => {
    setActiveTab(tab);
  };

  const [activeSecTab, setActiveSecTab] = useState("CustomizedExperience");

  const handleTabSecClick = (tab) => {
    setActiveSecTab(tab);
  };

  const handleBarSecClick = (tab) => {
    setActiveSecTab(tab);
  };

  const contentData = {
    IdentifyGaps: {
      text: "We evaluate organizational data, psychographic profiles, and feedback to pinpoint the specific areas each employee needs to work on.",
      image: "/image/product1.png",
    },
    PersonalizedNudges: {
      text: " Our system sends micro-prompts tailored to each individual’s personality and growth needs, making it easier to adopt new behaviors in daily routines.",
      image: "/image/product1.png",
    },
    MeasureProgress: {
      text: " Monitor changes in behavior through real-time feedback from stakeholders. Track key metrics such as improved collaboration or increased productivity..",
      image: "/image/product1.png",
    },
    RefineIterate: {
      text: " We continually analyze feedback data and psychographic insights to fine-tune nudges, ensuring employees remain motivated, engaged, and on track.",
      image: "/image/product1.png",
    },
  };
  const contentDataSec = {
    CustomizedExperience: {
      text: "Each nudge is crafted with a deep understanding of the user's psychological drivers, making interventions both relevant and impactful.",
      image: "/image/product2.png",
    },
    LongLastingImpact: {
      text: "Ongoing micro-prompts and follow-ups reinforce positive habits, preventing relapse into old behaviors",
      image: "/image/product2.png",
    },
    VisibleResults: {
      text: " Measurable data—like reduced conflict rates, better team engagement, or improved leadership scores—shows clear ROI for your organization.",
      image: "/image/product2.png",
    },
    ScalableFlexible: {
      text: " Suitable for organizations of all sizes, from small teams to large enterprises. Adjust the intensity and frequency of nudges to match your specific needs.",
      image: "/image/product2.png",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderContent = [
    {
      review:
        "WRIGHTS has transformed our leadership training by making behavioral change measurable and actionable, moving us from assumptions to data-driven decisions.",
      name: "Sam",
      position: "Manager",
      sales: "3",
      engagement: "Increase in Sales Engagement",
      image: "/image/review.png", // Single image for this review
    },
    {
      review:
        "Their AI-powered nudges have helped our employees improve key skills seamlessly, making learning a continuous and engaging process.",
      name: "Emma",
      position: "Director",
      sales: "5",
      engagement: "Improvement in Team Efficiency",
      image: "/image/review2.jpg", // Single image for this review
    },
    {
      review:
        "A game-changer in employee development—highly personalized insights, impactful nudges, and outstanding support!.",
      name: "Liam",
      position: "CEO",
      sales: "2",
      engagement: "Boost in Overall Productivity",
      image: "/image/team3.png", // Single image for this review
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

  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

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

  const [isVisibleThird, setIsVisibleThird] = useState(false);

  const refUse = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleThird(true);
        }
      },
      { threshold: 0.2 }
    );

    if (refUse.current) {
      observer.observe(refUse.current);
    }

    return () => {
      if (refUse.current) observer.unobserve(refUse.current);
    };
  }, []);

  const [isVisibleFour, setIsVisibleFour] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("Scrolled to bottom");
    }
  };

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


  
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.5 }
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
  return (
    <>
      <div className="product">
        <div className="productContainer">
          <div className="productContent">
            <h2>
              Transform Your Workforce, With <span>WRIGHTS NUDGES</span>
            </h2>
            <p>
              Leverage AI-driven insights, ultra-customized nudges, and
              measurable outcomes to inspire lasting change — only with WRIGHTS.
            </p>
            <button className="bookDemo-btn" onClick={toggleModal}>Book a Demo</button>
          </div>
        </div>
      </div>
      <div
        className={`productSection1 ${isVisible ? "animate" : ""}`}
        ref={animationRef}
      >
        <div className="productSection1Container">
          <p>
            WRIGHTS Nudges is our signature tool designed to drive
            <span> lasting behavioral change</span> using a combination of
            <span> targeted micro-prompts, structured feedback</span> , and
            <span> psychographic profiling</span> . It identifies crucial areas
            for employee development and delivers
            <span> quick, action-oriented triggers</span> that foster positive
            workplace habits and cultural transformation.
          </p>
        </div>
      </div>
      <div
        className={`productSection2 ${isSectionVisible ? "animate" : ""}`}
        ref={sectionObserverRef}
      >
        <div className="productSectionContents">
          <div className="productSection2Head">
            <h2>Key Features</h2>
          </div>
          <div className="productSection2Container">
            <div className="productSection2CotentMain">
              <div className="productSection2Cotent">
                <div className="section2Head">
                  <h2>
                    <TbView360Number />
                    360° Feedback Integration
                  </h2>
                </div>
                <div className="section2Cotent">
                  <p>
                    <span>What It Is:</span> Collect insights from peers,
                    managers, and direct reports to gain a well-rounded
                    perspective on each employee's growth areas.
                  </p>
                  <p>
                    <span>Why It Matters:</span> Helps identify blind spots and
                    improvement opportunities that traditional reviews may
                    overlook.
                  </p>
                </div>
              </div>
              <div className="productSection2Cotent">
                <div className="section2Head">
                  <h2>Action-Oriented Micro-Prompts</h2>
                </div>
                <div className="section2Cotent">
                  <p>
                    <span>What It Is:</span> Short, timely reminders (nudges)
                    encouraging employees to improve communication, collaborate
                    effectively, and exhibit leadership qualities
                  </p>
                  <p>
                    <span>Why It Matters:</span> These bite-sized prompts are
                    easy to act on, making behavioral change more sustainable.
                  </p>
                </div>
              </div>
              <div className="productSection2Cotent">
                <div className="section2Head">
                  <h2>Psychographic Profiling</h2>
                </div>
                <div className="section2Cotent">
                  <p>
                    <span>What It Is:</span> Our tool segments employees based
                    on personality traits, motivations, values, and attitudes.
                  </p>
                  <p>
                    <span>Why It Matters:</span> By understanding what truly
                    drives each individual, we can craft ultra-customized nudges
                    that resonate more deeply, increasing engagement and
                    long-term adoption of desired behaviors.
                  </p>
                </div>
              </div>
              <div className="productSection2Cotent">
                <div className="section2Head">
                  <h2>Real-Time Monitoring</h2>
                </div>
                <div className="section2Cotent">
                  <p>
                    <span>What It Is:</span> A dashboard tracks progress,
                    measures employee engagement, and provides analytics to
                    refine nudges.
                  </p>
                  <p>
                    <span>Why It Matters:</span> Immediate visibility into
                    what's working (and what's not) allows for rapid
                    adjustments, ensuring effective results.
                  </p>
                </div>
              </div>
              <div className="productSection2Cotent">
                <div className="section2Head">
                  <h2>Simple User Experience</h2>
                </div>
                <div className="section2Cotent">
                  <p>
                    <span>What It Is:</span> An intuitive interface that makes
                    it easy for employees to read and act on feedback without
                    feeling overwhelmed.
                  </p>
                  <p>
                    <span>Why It Matters:</span>oLow learning curve means higher
                    adoption and consistent usage across the organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="productSection2Img">
              <img src="/image/about4.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="productSection3">
        <div
          ref={refUse}
          className={`productSection3Container ${
            isVisibleThird ? "animatation" : ""
          }`}
        >
          <div className="productSection3Head ">
            <h2>How WRIGHTS Nudges Works</h2>
          </div>
          <div className="aboutSection2Container ">
            <div className="aboutSection2Content">
              <p>{contentData[activeTab].text}</p>
            </div>
            <div className="aboutSection2Img">
              <img src={contentData[activeTab].image} alt={activeTab} />
            </div>
          </div>
          <div className="aboutSection2Tabs ">
            <div
              className={`tab ${activeTab === "IdentifyGaps" ? "active" : ""}`}
              onClick={() => handleTabClick("IdentifyGaps")}
            >
              Identify Gaps
            </div>
            <div
              className={`tab ${
                activeTab === "PersonalizedNudges" ? "active" : ""
              }`}
              onClick={() => handleTabClick("PersonalizedNudges")}
            >
              Personalized Nudges
            </div>
            <div
              className={`tab ${
                activeTab === "MeasureProgress" ? "active" : ""
              }`}
              onClick={() => handleTabClick("MeasureProgress")}
            >
              Measure Progress
            </div>
            <div
              className={`tab ${activeTab === "RefineIterate" ? "active" : ""}`}
              onClick={() => handleTabClick("RefineIterate")}
            >
              Refine & Iterate
            </div>
          </div>
          <div className="aboutSection2Bar ">
            <div
              className="bar1"
              style={{
                backgroundColor:
                  activeTab === "IdentifyGaps"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("IdentifyGaps")}
            ></div>
            <div
              className="bar2"
              style={{
                backgroundColor:
                  activeTab === "PersonalizedNudges"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("PersonalizedNudges")}
            ></div>
            <div
              className="bar3"
              style={{
                backgroundColor:
                  activeTab === "MeasureProgress"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("MeasureProgress")}
            ></div>
            <div
              className="bar4"
              style={{
                backgroundColor:
                  activeTab === "RefineIterate"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarClick("RefineIterate")}
            ></div>
          </div>
        </div>
      </div>

      <div
        ref={aboutSubRef}
        className='productSection4'
      >
        <div className="productSection3Container">
          <div className="productSection3Head">
            <h2>Why Choose WRIGHTS Nudges</h2>
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
                activeSecTab === "CustomizedExperience" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("CustomizedExperience")}
            >
              Customized Experience
            </div>
            <div
              className={`tab ${
                activeSecTab === "LongLastingImpact" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("LongLastingImpact")}
            >
              Long-Lasting Impact
            </div>
            <div
              className={`tab ${
                activeSecTab === "VisibleResults" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("VisibleResults")}
            >
              Visible Results
            </div>
            <div
              className={`tab ${
                activeSecTab === "ScalableFlexible" ? "active" : ""
              }`}
              onClick={() => handleTabSecClick("ScalableFlexible")}
            >
              Scalable & Flexible
            </div>
          </div>
          <div className="aboutSection2Bar">
            <div
              className="bar1"
              style={{
                backgroundColor:
                  activeSecTab === "CustomizedExperience"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("CustomizedExperience")}
            ></div>
            <div
              className="bar2"
              style={{
                backgroundColor:
                  activeSecTab === "LongLastingImpact"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("LongLastingImpact")}
            ></div>
            <div
              className="bar3"
              style={{
                backgroundColor:
                  activeSecTab === "VisibleResults"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("VisibleResults")}
            ></div>
            <div
              className="bar4"
              style={{
                backgroundColor:
                  activeSecTab === "ScalableFlexible"
                    ? "rgba(0, 33, 54, 1)"
                    : "transparent",
              }}
              onClick={() => handleBarSecClick("ScalableFlexible")}
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
                <button className="btn">Book a Demo</button>
                <button className="cancle">Try for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="homeSection5 fadeIn">
        <div className="homeSection5Container">
          <div className="homeSection5Head">
            <h2>Hear From Our Clients</h2>
          </div>
          <div
            className={`homeSection5Content ${fadeOut ? "fade-out" : ""}`}
            onScroll={handleScroll}
          >
            <div className="homeSection5ContentReview">
              <div className="section5Review2">
                <img src="/image/logo.png" alt="Logo" />
                <h2>“{sliderContent[currentSlide].review}”</h2>
                <div className="section5Review2Text">
                  {/* Render single image */}
                  <img src={sliderContent[currentSlide].image} alt="Reviewer" />
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

export default Product;
