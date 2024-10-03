import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import gsap from "gsap";
import "./navbar.css";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);

  function handleNavigation(link) {
    if (link === "/schedule") {
      navigate(link);
    } else if (link === "/aboutme") {
      navigate(link);
    } else if (link === "/services") {
      navigate(link);
    }
  }

  function handleHomeNavigation() {
    navigate("/");
  }

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  const links = [
    { linkName: "About Us", link: "/aboutus" },
    { linkName: "Therapists", link: "/therapists" },
    { linkName: "Services", link: "/services" },
    { linkName: "Location & Hours", link: "/location" },
    { linkName: "Contact", link: "/contact" },
    { linkName: "Careers", link: "/careers" },
  ];

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
      <div className="navbar-logo-container">
        <Button buttonName={"Book Now"} />
        <img
          src={logo}
          className="navbar-logo"
          onClick={() => handleHomeNavigation()}
        />
        <div className="navbar-socials-container">
          <img className="social-icon" src={insta} />
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
    </div>
  );
}
