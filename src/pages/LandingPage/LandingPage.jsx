import "./landingpage.css";
import massage from "../../assets/massageLP.jpg";
import badge from "../../assets/bestBadge.png";
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";

function LandingPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="landing-page-main">
      <div className="landing-page-img-container">
        <div className="landing-page-quote-container">
          <h1>Idaho's Best Massage 2023</h1>
          <img src={badge} />
        </div>

        {windowWidth <= 800 ? (
          <Button
            buttonName="Book Now"
            padding="15px 30px 15px 30px"
            size="2.5rem"
            margin="0% 0% 3% 0%"
          />
        ) : (
          <Button
            buttonName="Book Now"
            padding="15px 30px 15px 30px"
            size="3.5rem"
            margin="0% 0% 3% 0%"
          />
        )}

        <div className="vignette-overlay"></div>
        <img src={massage} />
      </div>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
