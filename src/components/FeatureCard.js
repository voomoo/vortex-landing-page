import { useState } from "react";
import Aos from "aos";
const FeatureCard = ({ icon, title, text }) => {
  useState(() => {
    Aos.init({ duration: "500" });
  }, []);

  return (
    <div
      className="feature-card"
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-sine"
      data-aos-mirror="true"
    >
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
