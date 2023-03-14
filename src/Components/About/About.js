import bg from "../../Images/aboutBg.png";
import aboutOne from "../../Images/aboutOne.png";
import aboutTwo from "../../Images/AboutTwo.png";
import peopleOne from "../../Images/man1.png";
import peopleTwo from "../../Images/man2.png";
import peopleThree from "../../Images/man3.png";
import "./About.css";
import Form from "react-bootstrap/Form";
import Footer from "../../Components/Footer/Footer";
import AOS from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const people = [
    {
      image: `${peopleOne}`,
    },
    {
      image: `${peopleTwo}`,
    },
    {
      image: `${peopleThree}`,
    },
  ];
  return (
    <div className="aboutContainer">
      {/* Image  */}
      <div className="imageContainer">
        <img src={bg} alt="" className="bg" />
      </div>
      {/* End Of Image  section*/}
      <h1
        className="text-center p-1 mt-3"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        ABOUT US
      </h1>
      {/* What we do Section */}
      <div className="whatContainer">
        <motion.div
          className="left"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <h1>What We Do</h1>
          <p
            style={{
              fontSize: "13px",
              marginTop: "20px",
            }}
          >
            It is a long established fact that a reader will be
            <br /> distracted by the of readable content of a page
            <br /> when lookings at its layouts the points of using
            <br /> that it has a more-or-less normal.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "#292F36",
              color: "white",
              marginTop: "20px",
            }}
          >
            Our Concepts
          </button>
        </motion.div>
        <motion.div
          className="right p-2"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <img src={aboutOne} alt="" className="aOne" />
        </motion.div>
      </div>
      {/* End Of What We do Section */}
      {/* End Result Section */}
      <div className="endContainer">
        <div
          className="left"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={aboutTwo} alt="" className="aOne" />
        </div>
        <div
          className="right"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>End Of Results</h1>
          <p
            style={{
              fontSize: "13px",
              marginTop: "20px",
            }}
          >
            It is a long established fact that a reader will be
            <br /> distracted by the of readable content of a page
            <br /> when lookings at its layouts the points of using
            <br /> that it has a more-or-less normal.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "#292F36",
              color: "white",
              marginTop: "20px",
            }}
          >
            Our Portfolio
          </button>
        </div>
      </div>
      {/* End Of end Result Section */}

      {/* People Thinking Section */}
      <div className="thinkingContainer">
        <h2
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          What the people thinks
          <br /> About Us
        </h2>
        <div className="peopleContainer">
          {people.map((e) => {
            return (
              <div
                className="peopleCard"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={e.image} alt="" className="peopleImage" />
              </div>
            );
          })}
        </div>
      </div>
      {/* End Of People Thinking Section */}

      {/* Form Section */}
      <div className="formContainer">
        <h2
          className="text-center"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Creative project? Let's have
          <br /> a productive talk.
        </h2>
        <div className="form">
          <Form>
            <div className="formControll">
              <Form.Group
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="mb-3"
                controlId="formBasicEmail"
                style={{
                  width: "40%",
                }}
              >
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="mb-3"
                controlId="formBasicEmail"
                style={{
                  width: "40%",
                }}
              >
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <Form.Floating
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mb-3"
              style={{
                width: "90%",
                margin: "auto",
              }}
            >
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="name@example.com"
                style={{
                  height: "250px",
                }}
              />
              <label htmlFor="floatingInputCustom">Hey Say Somthing ...</label>
            </Form.Floating>
          </Form>
        </div>
        <div
          className="butn"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <button
            className="btn btn-dark"
            style={{
              margin: "auto",
            }}
          >
            Send Us
          </button>
        </div>
      </div>
      {/* End Of Form Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
