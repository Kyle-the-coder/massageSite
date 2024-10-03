import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import gsap from "gsap";
import "./navbar.css";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import LottieAnimation from "../LottieAnimation";

export function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  //Phone States
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);

  const links = [
    { linkName: "About Us", link: "/aboutus" },
    { linkName: "Therapists", link: "/therapists" },
    { linkName: "Services", link: "/services" },
    { linkName: "Location & Hours", link: "/location" },
    { linkName: "Contact", link: "/contact" },
    { linkName: "Careers", link: "/careers" },
  ];

  function handleHomeNavigation() {
    navigate("/");
  }
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
      setIsAnimtionActive(true);
    } else if (isHamburgerActive) {
      setIsAnimtionActive(false);
      gsap.to(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleNavigation(link) {
    if (link === "/schedule") {
      navigate(link);
    } else if (link === "/aboutme") {
      navigate(link);
    } else if (link === "/services") {
      navigate(link);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isHamburgerActive]);

  useEffect(() => {
    if (hoverIndex !== null) {
      gsap.from(".active1", 0.8, {
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "power4.out",
      });
    }
  }, [hoverIndex]);

  return (
    <div className="navbar-main-container">
      {windowWidth <= 600 ? (
        //Phone View
        <div className="navbar-main-container">
          <img
            src={logo}
            className="navbar-logo"
            onClick={() => handleHomeNavigation()}
          />

          <div
            className="navbar-phone-hamburger"
            onClick={() => handleActivateHamburger()}
          >
            <LottieAnimation
              isHamburgerActive={isHamburgerActive}
              isAnimationActive={isAnimationActive}
            />
          </div>

          {isHamburgerActive && (
            <div className="navbar-phone-dropdown-container">
              {links.map((link, index) => {
                return (
                  <div key={link.linkName}>
                    <h3
                      className="dropdown-link-name"
                      onClick={() => handleNavigation(link.link)}
                    >
                      {link.linkName}
                    </h3>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        //Default Monitor View
        <>
          <div className="navbar-logo-container">
            <Button buttonName={"Book Now"} />
            <img
              src={logo}
              className="navbar-logo"
              onClick={() => handleHomeNavigation()}
            />
            <div className="navbar-socials-container">
              <img
                className="social-icon"
                style={{ marginRight: "15%" }}
                src={insta}
              />
              <img className="social-icon" src={fb} />
            </div>
          </div>
          <div className="navbar-link-container">
            {links.map((link, index) => {
              return (
                <h3
                  className="navbar-link f1-8"
                  key={link.linkName}
                  onClick={() => handleNavigation(link.link)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {link.linkName}
                  {hoverIndex === index && <div className="active1"></div>}
                </h3>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
