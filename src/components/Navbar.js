import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Button, Drawer } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import Aos from "aos";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <nav>
        <img src={logo} alt="" />
        <div className="links">
          <a href="/">HOW WE WORK</a>
          <a href="/">BLOG</a>
          <a href="/">ACCOUNT</a>
          <Button className="nav-button">VIEW PLANS</Button>
        </div>
      </nav>
      <div className="nav-mobile">
        <img src={logo} alt="" />
        <MenuFoldOutlined onClick={showDrawer} />
        <Drawer
          title={<img src={logo} height="40px" />}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p style={{ color: "#474f85" }}>HOW WE WORK</p>
          <p style={{ color: "#474f85" }}>BLOG</p>
          <p style={{ color: "#474f85" }}>ACCOUNT</p>
          <Button>VIEW PLANS</Button>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
