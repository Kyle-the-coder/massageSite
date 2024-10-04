import "./landingpage.css";
import massage from "../../assets/massageLP.jpg";
import badge from "../../assets/bestBadge.png";
import { Button } from "../../components/Button/Button";

function LandingPage() {
  return (
    <div className="landing-page-main">
      <div className="landing-page-img-container">
        <div className="landing-page-quote-container">
          <h1>Idaho's best massage 2023</h1>
          <img src={badge} />
        </div>
        <Button buttonName="Book Now" style={{ zIndex: 5 }} />
        <div className="vignette-overlay"></div>
        <img src={massage} />
      </div>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
