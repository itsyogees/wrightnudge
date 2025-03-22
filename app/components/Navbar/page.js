"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const [formValues, setFormValues] = useState({
    name: "",
    mobileNo: "",
    email: "",
    companyName: "",
  });

  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const pathname = usePathname();

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 854);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkMobile); // Cleanup
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.toggle("menu-open", !isMenuOpen);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormValues({ name: "", mobileNo: "", email: "", companyName: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (href) => {
    return pathname === href ? "active" : "";
  };

  return (
    <div ref={navbarRef} className={`navbarMain ${isSticky ? "fixed" : ""}`}>
      <div className="navbarContainer">
        <nav className="navbar">
          <div className="navIcons">
            <div className="menuToggle" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" />
              )}
            </div>
            <div className="logo">
              <Link href="/">
                <img src="/image/logo.png" alt="Logo" />
              </Link>
            </div>
            <ul
              ref={menuRef}
              className={`navItems ${isMenuOpen ? "active" : ""}`}
            >
              <li>
                <Link
                  href="/"
                  className={getLinkClass("/")}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/About"
                  className={getLinkClass("/pages/About")}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/Product"
                  className={getLinkClass("/pages/Product")}
                  onClick={toggleMenu}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/Solution"
                  className={getLinkClass("/pages/Solution")}
                  onClick={toggleMenu}
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/Faq"
                  className={getLinkClass("/pages/Faq")}
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
              </li>
              {/* Conditionally render buttons for mobile view */}
              {isMobile && (
                <li className="mobileButtons">
                  <button
                    className="login-btn"
                    onClick={() =>
                      window.open("https://wrights-nudges.netlify.app/", "_blank")
                    }
                  >
                    Login
                  </button>
                  <button className="bookDemo-btn" onClick={toggleModal}>
                    Book a Demo
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Right Menu for Desktop */}
          {!isMobile && (
            <div className="rightMenu">
              <div className="login">
                <button
                  className="login-btn"
                  onClick={() =>
                    window.open("https://wrights-nudges.netlify.app/", "_blank")
                  }
                >
                  Login
                </button>
              </div>
              <div className="bookDemo">
                <button className="bookDemo-btn" onClick={toggleModal}>
                  Book a Demo
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Modal for Book a Demo */}
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
    </div>
  );
};

export default Navbar;