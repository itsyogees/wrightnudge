"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImFlag } from "react-icons/im";
import { FaRegImages } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { FaBars, FaTimes } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const About = () => {
  const [activeTab, setActiveTab] = useState("Insight");
  const [selectedTab, setSelectedTab] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isInViews, setIsInViews] = useState(false);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer for containerRef
  useEffect(() => {
    if (!containerRef.current) return; // Ensure containerRef is attached

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

    const elements = containerRef.current.querySelectorAll(".aboutSectionCart");
    if (elements.length > 0) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for sectionRef
  useEffect(() => {
    if (!sectionRef.current) return; // Ensure sectionRef is attached

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Scroll effect for scaling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 - scrollPosition / 1000;
      setScale(Math.max(scaleValue, 0.8));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentData = {
    Insight: {
      text: "<strong>This insight</strong>  led to a radical rethinking of the training model. Instead of relying on limited sessions and intuition-driven methods, our approach blends behavioral science with technology to achieve measurable, long-term impact. WRIGHTS is the culmination of years spent asking how to nudge employees towards small, incremental improvements every day—ultimately leading to genuine behavioral transformation.",
      image: "/image/about-ing1.jpg",
    },
    OurValues: {
      text: "At the core of <strong>our values</strong>, we believe in placing employees at the center of their own growth. We never use training for evaluation purposes. Instead, we provide each participant with a clear picture of where they currently stand through a 360-degree behavioral feedback report. Armed with this knowledge, employees receive AI-powered nudges tailored to their unique areas of improvement—no forced directives or top-down mandates. By democratizing the process and removing the pressure of HR-led evaluations, we empower individuals to embrace their own growth journey.",
      image: "/image/about-ing2.jpg",
    },
    UniqueApproach: {
      text: "Our <strong>unique approach</strong> lies in our ultra-customized follow-ups. While traditional programs might end with a two-day workshop, WRIGHTS extends well beyond the classroom. We combine initial training sessions with a 120-day follow-up period, delivering daily nudges guided by the individual's behavioral feedback scores. After this period, we generate a second behavioral report so participants can compare their progress, see tangible improvements, and understand the true value of consistent, incremental growth.",
      image: "/image/about-ing3.jpg",
    },
    WhoDoWeServe: {
      text: "<strong>Who do we serve?</strong> Our solution is flexible and scalable, making it just as effective for a company with a handful of managers as it is for an organization with 10,000+ employees. Because our pricing aligns with the nudges delivered rather than the duration of training, even smaller teams can access the same high-impact, tech-driven behavioral insights traditionally reserved for larger enterprises.",
      image: "/image/about-ing4.jpg",
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBarClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSelectTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const tabContent = [
    {
      text: "We question traditional approaches and embrace fresh perspectives to drive meaningful change. By fostering curiosity and innovation, we help teams break barriers and achieve new heights.",
      imageSrc: "/image/img1.jpg",
    },
    {
      text: "Excellence isn't optional—it's the foundation of everything we do. We leverage data-driven insights and continuous learning to ensure impactful and measurable outcomes.",
      imageSrc: "/image/img2.jpg",
    },
    {
      text: "Lasting change happens when people feel heard, valued, and empowered. We create human-centric solutions that enhance collaboration, well-being, and performance.",
      imageSrc: "/image/img3.jpg",
    },
    {
      text: "Complexity holds progress back, so we simplify learning and development. Our nudges and insights help employees take small, effective steps toward long-term growth.",
      imageSrc: "/image/img4.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.querySelector(".aboutSection1");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInViews(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.querySelector(".aboutSection1");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // This function is declared twice in your code, I'm removing the duplicate
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scaleValue = 1 - scrollPosition / 1000;
    setScale(Math.max(scaleValue, 0.8));
  };

  // This is a duplicate effect, already defined above
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // This is a duplicate effect, already defined above
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  // Fix for the error - Check if containerRef exists and has elements before querying
  useEffect(() => {
    if (!containerRef.current) return;

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

    const elements = containerRef.current.querySelectorAll(".aboutSectionCart");
    if (elements && elements.length > 0) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [containerRef.current]); // Add containerRef.current as dependency to rerun when it's available

  const cardsData = [
    {
      image: "/image/interventions.jpg",
      title: "Nudges- tiny interventions",
      description:
        "Nudges, tiny interventions in the work environment to get people attention that influence their behavior. Nudges, remind & encourage people to make better decisions",
    },
    {
      image: "/image/analytics.jpg",
      title: "Science and data analytics ",
      description:
        "Training evaluation no longer be based on personal experiences or opinions. Bringing more science and data analytics to measure actual behavior change to make work better ",
    },
    {
      image: "/image/Targeted.jpg",
      title: "Micro-Targeted follow-ups",
      description:
        "Machine Learning & Artificial Intelligence  driven micro-targeted follow-ups helps us to know, what intervention to send, to which person, at what time ",
    },
  ];

  const aboutRef = useRef(null);
  const aboutSubRef = useRef(null);

  const toggleBio = (index) => {
    if (expandedCards.includes(index)) {
      // If the card is already expanded, collapse it
      setExpandedCards(expandedCards.filter((i) => i !== index));
    } else {
      // If the card is not expanded, expand it and collapse others
      setExpandedCards([index]);
    }
  };

  const teamMembers = [
    {
      name: "Mr. Ephrem",
      role: "Co-Founder",
      image: "/image/team1.jpg",
      bio: [
        `With over 12 years of experience in training and development, Ephrem is a leading expert in Organizational Behavior, dedicated to unlocking the potential of individuals and teams. As the Co-Founder of wrights.ai, he has empowered over 15,000 corporate employees and students through 8,000+ hours of training, driving measurable behavioral change, leadership excellence, and enhanced workplace performance.`,
        `A physics graduate with a postgraduate degree in business administration, Ephrem has trained professionals at all levels—from entry-level employees to C-suite executives—focusing on leadership, communication, collaboration, and productivity. His expertise lies in creating thriving team ecosystems, leveraging strengths to achieve tangible results. Known for his practical, results-driven approach, he crafts tailored solutions that address unique organizational challenges, ensuring long-term impact.`,
        `At the core of his training philosophy is the belief that behavioral change happens through consistent, science-backed interventions. Through wrights.ai, he pioneers the use of micro-targeted nudges, data-driven insights, and behavioral analytics to create lasting transformation in the workplace. His mission is to equip organizations with actionable strategies that enhance employee engagement, drive performance, and build a culture of continuous growth.`,
      ],
    },
    {
      name: "Mr. Infant Ivan",
      role: "Technical Architect",
      image: "/image/team3.jpg",
      bio: [
        `A seasoned IT Solutions Architect with over 17 years of experience in the software industry. Proven ability to translate business requirements into robust and scalable technical solutions. Expertise in a wide range of Microsoft technologies, including .NET Core, Web API, WPF, MVC, and Xamarin Forms. Strong understanding of cloud computing platforms (Azure) and microservices architecture.`,
        `Certified in Azure (6x), TOGAF, and MCTS (SQL Server). Proficient in SQL Server, MongoDB, Azure DevOps, Git, Kafka, and Azure PaaS services. Advocate for Agile methodologies and DevOps practices. Experience in designing, developing, and implementing microservices using Kubernetes, Confluent Kafka, and MongoDB.`,
        `Demonstrated success in delivering complex projects across various industries, including Retail Logistics, Store Stock Management, and Healthcare. Held key roles in technical consultation, architecture development, and software development. Proven ability to lead and mentor teams, optimize performance, and drive successful outcomes.`,
      ],
    },
    {
      name: "Mr. Subramaniam",
      role: "Advisor",
      image: "/image/team2.jpg",
      bio: [
        `Mr. Subramaniam is a seasoned advisor and director specializing in Blockchain, Crypto, and Digital Currencies at Paypaul. `,
      ],
    },
  ];

  return (
    <>
      <div className="about">
        <div className="aboutContainer">
          <div className="aboutContent">
            <h2>Our Commitment to LASTING Change</h2>
            <p>
              By blending data-driven insights, personalized nudges, and
              practical interventions, we help employees become their best
              selves and organizations thrive.
            </p>
            <button className="bookDemo-btn"  onClick={toggleModal}>Book a Demo</button>
          </div>
        </div>
      </div>
      <div className={`aboutSection1 ${isInView ? "inView" : ""}`}>
        <div className="aboutSection1Head">
          <h2>It all began with a single question</h2>
        </div>
        <div className="aboutSection1Content">
          <p>
            WRIGHTS began as a quest to answer a critical question faced by
            training professionals everywhere: "How do we create lasting
            behavioral change?" After more than a decade in Training &
            Development, we realized that traditional short-term workshops, no
            matter how well-crafted, rarely produce enduring changes in employee
            behavior.
          </p>
        </div>
      </div>
      <div className={`aboutSection2 ${isInViews ? "inView" : ""}`}>
  <div className="aboutSection2Container">
    <div className="aboutSection2Content">
      <p dangerouslySetInnerHTML={{ __html: contentData[activeTab].text }} />
    </div>
    <div className="aboutSection2Img">
      <img src={contentData[activeTab].image} alt={activeTab} />
    </div>
  </div>
  <div className="aboutSection2Tabs">
    <div
      className={`tab ${activeTab === "Insight" ? "active" : ""}`}
      onClick={() => handleTabClick("Insight")}
    >
      Insight
    </div>
    <div
      className={`tab ${activeTab === "OurValues" ? "active" : ""}`}
      onClick={() => handleTabClick("OurValues")}
    >
      We Believe
    </div>
    <div
      className={`tab ${activeTab === "UniqueApproach" ? "active" : ""}`}
      onClick={() => handleTabClick("UniqueApproach")}
    >
      Unique Approach
    </div>
    <div
      className={`tab ${activeTab === "WhoDoWeServe" ? "active" : ""}`}
      onClick={() => handleTabClick("WhoDoWeServe")}
    >
      Who do we serve?
    </div>
  </div>
  <div className="aboutSection2Bar">
    <div
      className="bar1"
      style={{
        backgroundColor:
          activeTab === "Insight" ? "rgba(0, 33, 54, 1)" : "transparent",
      }}
      onClick={() => handleBarClick("Insight")}
    ></div>
    <div
      className="bar2"
      style={{
        backgroundColor:
          activeTab === "OurValues" ? "rgba(0, 33, 54, 1)" : "transparent",
      }}
      onClick={() => handleBarClick("OurValues")}
    ></div>
    <div
      className="bar3"
      style={{
        backgroundColor:
          activeTab === "UniqueApproach" ? "rgba(0, 33, 54, 1)" : "transparent",
      }}
      onClick={() => handleBarClick("UniqueApproach")}
    ></div>
    <div
      className="bar4"
      style={{
        backgroundColor:
          activeTab === "WhoDoWeServe" ? "rgba(0, 33, 54, 1)" : "transparent",
      }}
      onClick={() => handleBarClick("WhoDoWeServe")}
    ></div>
  </div>
</div>
      <div className="aboutSection3">
        <div className="aboutSection3Head">
          <h2>Our Vision</h2>
        </div>
        <div className="aboutSection3Content">
          <p>
            <span>
              To empower individuals with data-driven insights and AI-powered
              nudges, making everyday behaviors the foundation for lasting
              change.
            </span>
          </p>
        </div>
      </div>
      <div
        className={`aboutSection4 ${
          isVisible ? "animate-visible" : "animate-hidden"
        }`}
        ref={sectionRef}
      >
        <div className="aboutSection4Container">
          <div className="aboutSection4Head">
            <h2>Our Values</h2>
          </div>
          <div className="aboutSection4Content">
            <div className="valueTabs">
              <div
                className={`valueTab ${selectedTab === 0 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(0)}
              >
                <ImFlag />
                <div className="valueContent">
                  <p>Challenge the Status Quo</p>
                </div>
              </div>

              <div
                className={`valueTab ${selectedTab === 1 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(1)}
              >
                <FaRegImages />
                <div className="valueContent">
                  <p>Uphold High Standards in Delivering Results</p>
                </div>
              </div>

              <div
                className={`valueTab ${selectedTab === 2 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(2)}
              >
                <FaHeart />
                <div className="valueContent">
                  <p>Focus on People</p>
                </div>
              </div>

              <div
                className={`valueTab ${selectedTab === 3 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(3)}
              >
                <HiOutlineSpeakerphone />
                <div className="valueContent">
                  <p>Make It Easier</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aboutSection4Sliders">
            <div className="aboutSlider">
              <div className="aboutSliderContent">
                {tabContent[selectedTab].text}
              </div>
              <div className="aboutSliderimg">
                <img
                  src={tabContent[selectedTab].imageSrc}
                  alt="slider image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutSection5">
  <div className="aboutSection5Container">
    <div className="aboutSection5Head">
      <h2>Our Team</h2>
      <p>Meet the talented individuals behind our success.</p>
    </div>
    <div className="aboutSectionContent">
      {teamMembers.map((member, index) => (
        <div className="aboutSectionCard" key={index}>
          <div className="aboutSectionImage">
            <img src={member.image} alt={member.name} />
            <div className="imageOverlay"></div>
            <div className="aboutSectionText">
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <button
                className="toggleButton"
                onClick={() => toggleBio(index)}
              >
                {expandedCards.includes(index) ? "−" : "+"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  {teamMembers.map((member, index) => (
    <div
      className={`modal ${expandedCards.includes(index) ? "open" : ""}`}
      key={index}
    >
      <div className="modalContent">
        <button className="closeButton" onClick={() => toggleBio(index)}>
          ×
        </button>
        <div className="modalImage">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="modalText">
          <h2>{member.name}</h2>
          <p className="role">{member.role}</p>
          <div className="bio">
            {member.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
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

export default About;
