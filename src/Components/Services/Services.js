import "./Services.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "../Footer/Footer";
// Images
import consept from "../../Images/consept.png";
import conseptBg from "../../Images/conseptBg.png";
import idea from "../../Images/idea.png";
import ideaBg from "../../Images/ideaBg.png";
import design from "../../Images/design.png";
import designBg from "../../Images/designBg.png";
import perfection from "../../Images/perfection.png";
import perfectionBg from "../../Images/perfectionBg.png";
import serviceBg from "../../Images/serviceBg.png";
import arrow from "../../Images/arrow.png";

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  // cards
  const cards = [
    {
      name: "Project Plan",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      name: "Interior Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      name: "Retile Designing",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      name: "2d/3d Art Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      name: "Project Plan",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      name: "Decoration Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];

  // Works
  const work = [
    {
      image: `${conseptBg}`,
      icon: `${consept}`,
      number: "01",
      heading: "Concept & Details",
      paragarph:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
    },
    {
      image: `${ideaBg}`,
      icon: `${idea}`,
      number: "02",
      heading: "Idea for Work",
      paragarph:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
    },
    {
      image: `${designBg}`,
      icon: `${design}`,
      number: "03",
      heading: "Design",
      paragarph:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
    },
    {
      image: `${perfectionBg}`,
      icon: `${perfection}`,
      number: "04",
      heading: "Perfection",
      paragarph:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
    },
  ];
  return (
    <div className="serviceContainer">
      {/* Service background Image Section */}
      <div className="serviceImage">
        <img src={serviceBg} alt="" className="image" />
      </div>
      {/* End Of Service background Image Section */}
      <h1 className="text-center mt-4">Services</h1>
      {/* Card Container Section*/}
      <div className="cardContainer">
        {cards.map((e) => {
          return (
            <div
              className="cardDiv"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4>{e.name}</h4>
              <p>{e.description}</p>
              <div className="btn">
                <p className="pt-3">Read More</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      {/* End of card Container Section */}

      {/* How We Work Section */}
      <div
        className="WorkContainer"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="text-center pt-5">How We Work</h1>
        <p className="text-center p-5">
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of
          <br /> the printing and typesetting industry.
        </p>
        <div className="workCardContainer">
          {work.map((e) => (
            <Link
              to={"/Pricing"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                className="workCards mt-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="left">
                  <img src={e.image} alt="" className="lftImage" />
                </div>
                <div className="right">
                  <div className="top">
                    <img src={e.icon} alt="" />
                    <h1>{e.number}</h1>
                  </div>
                  <p className="p-5">{e.paragarph}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* End Of How we work section */}

      <div
        className="joinContainer"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="joinPart">
          <h2 className="mt-4">Wanna Join the Interio ?</h2>
          <p className="mt-4">
            It is a long established fact will be distracted.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "#CDA274",
            }}
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* End Of Join Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
