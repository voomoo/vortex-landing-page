import { useEffect } from "react";
import { Button } from "antd";
import Aos from "aos";

const More = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="more" data-aos="zoom-in-up" data-aos-duration="1000">
      <h1>
        Find out more <br /> about how we work
      </h1>
      <Button className="more-btn">HOW WE WORK</Button>
    </div>
  );
};

export default More;
