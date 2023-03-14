import logo from "../../Images/navLogo.png";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";
import AOS from "aos";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="mainfoot">
      <div className="footContainer">
        <div
          className="logoside"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={logo} alt="" className="logoIcon" />
          <p
            style={{
              fontSize: "13px",
              marginTop: "30px",
            }}
          >
            It is a long established fact that a reader
            <br /> will be distracted lookings.
          </p>
          <div className="socialIcons">
            <FiFacebook />
            <FiTwitter />
            <AiOutlineLinkedin />
            <BsInstagram />
          </div>
        </div>
        <div
          className="pages"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h6>Pages</h6>
          <div className="links">
            <Link to={"/"} className="list">
              Home
            </Link>
            <Link to={"/About"} className="list">
              About Us
            </Link>
            <Link to={"/Services"} className="list">
              Services
            </Link>
            <Link to={"/Project"} className="list">
              Projects
            </Link>
            <Link to={"/Blogs"} className="list">
              Blogs
            </Link>
            <Link to={"/Contact"} className="list">
              Contact Us
            </Link>
          </div>
        </div>
        <div
          className="services"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h6>Services</h6>
          <p>Kitchen</p>
          <p>Living Area</p>
          <p>Bathroom</p>
          <p>Dinnig Hall</p>
          <p>Bedroom</p>
          <p>Kitchen</p>
        </div>
        <div
          className="contact"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h6>Contact</h6>
          <p
            style={{
              fontSize: "13px",
            }}
          >
            55 East Birchwood Ave.
            <br /> Brooklyn, New York 11201
          </p>
          <p>contact@interno.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </div>
      <p
        className="text-center mt-2"
        style={{
          fontSize: "10px",
        }}
      >
        Copyright © Kanishka Pasindu-devloped by - Kanishka Pasindu
      </p>
    </div>
  );
}

export default Footer;
