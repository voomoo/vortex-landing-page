import { useEffect } from "react";
import { Button } from "antd";
import family from "../assets/family.jpg";
import Aos from "aos";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="hero-section">
      <div className="textual" data-aos="fade-right" data-aos-duration="1000">
        <hr />
        <h1>Securing Your Family for Better Future</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
          reiciendis natus quisquam obcaecati itaque ut? Eum quasi veniam velit,
          reprehenderit unde placeat vel fugit optio nobis laudantium. Id,
          molestias delectus.
        </p>
        <Button className="hero-btn">View Plans</Button>
      </div>
      <img src={family} alt="" data-aos="fade-up" data-aos-duration="1000" />
    </div>
  );
};

export default HeroSection;
