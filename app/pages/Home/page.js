"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { FaBars, FaTimes } from "react-icons/fa";
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const slides = [
    {
      title: "Drive Lasting Behavioral CHANGE in Your Workforce",
      description:
        "Use science-based interventions and timely Nudges to create meaningful, enduring shifts in employee habits and workplace culture.",
      buttonText: "Book a Demo",
    },
    {
      title: "MEASURE  What Matters and Ignite Real Progress",
      description:
        "Focus on the metrics that truly drive performance, using data insights to fuel tangible, lasting change in your organization.",
      buttonText: "Book a Demo",
    },
    {
      title: "MICRO-TARGETED Nudges for Rapid Behavior Shifts",
      description:
        "Deliver personalized prompts that address individual challenges, helping each employee take meaningful steps toward self-improvement and team success.",
      buttonText: "Book a Demo",
    },
  ];

  const sectionT = [
    {
      imgSection: "/image/homeSection31.jpeg",
      title: "“Nudges”- tiny interventions",
      description:
        "“Nudges”, tiny interventions in the work environment to get people attention that influence their behavior. Nudges, remind & encourage people to make better decisions.",
      link: "Know More",
      linkUrl:
        "https://www.linkedin.com/pulse/nudges-tiny-interventions-lasting-behavioral-change-ephrem-f-ebnac",
    },
    {
      imgSection: "/image/homeSection32.jpeg",
      title: "Science and data analytics",
      description:
        "Training evaluation no longer be based on personal experiences or opinions. Bringing more science and data analytics to measure actual behavior change to make work better.",
      link: "Know More",
      linkUrl:
        "https://www.linkedin.com/pulse/science-data-analytics-ld-ephrem-f-nnaic",
    },
    {
      imgSection: "/image/homeSection33.jpeg",
      title: "Micro-Targeted follow-ups",
      description:
        "Machine Learning & Artificial Intelligence driven micro-targeted follow-ups helps us to know, what intervention to send, to which person, at what time.",
      link: "Know More",
      linkUrl:
        "https://www.linkedin.com/pulse/micro-targeted-follow-ups-driving-lasting-behavioral-change-ephrem-f-lkbyc",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
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
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("Scrolled to bottom");
    }
  };
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <div className="homeContent">
            <div className="homeContent-text">
              <div className="carousel">
                <div
                  className="slides"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      className={`slide ${
                        index === currentIndex ? "active" : ""
                      }`}
                      key={index}
                    >
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      <button className="bookDemo-btn" onClick={toggleModal}>
                        {slide.buttonText}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="homeVideo">
        <video ref={videoRef} loop muted playsInline controls>
          <source src="/video/nudgeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="homeSection2">
        <div className="homeSection2Head">
          <h2>
            You'll <span>2X</span> your results with WRIGHTS. Here's how
          </h2>
        </div>
        <div className="homeSection2Content">
          <p>
            We blend science, data, and tiny interventions to spark lasting
            behavior change. Say goodbye to one-size-fits-all programs—every
            nudge is uniquely tailored to your employees' needs. Our
            micro-targeted approach amplifies impact where it matters most. Each
            intervention is backed by research, giving you confidence and
            clarity. Experience real, measurable transformation—no more dry,
            check-the-box training.
          </p>
        </div>
      </div>
      <div className="homeSection3">
        <div className="sections-container">
          {sectionT.map((item, index) => (
            <div
              className="section-item scroll-section"
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <img src={item.imgSection} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div ref={ref} className={`homeSection4 ${isVisible ? "animate" : ""}`}>
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
                <button className="btn" onClick={toggleModal}>
                  Book a Demo
                </button>
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
                <button className="btn" onClick={toggleModal}>
                  Book a Demo
                </button>
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

export default Home;
