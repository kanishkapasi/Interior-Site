import "./Home.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
// Images
import logoOne from "../../Images/bg.png";
import arrow from "../../Images/arrow.png";
import call from "../../Images/call.png";
import style from "../../Images/callUs.jpg";
import avatarone from "../../Images/avatarA.png";
import avatarTwo from "../../Images/avatarB.png";
import avatarThree from "../../Images/avatarC.png";
import articleOne from "../../Images/article (1).png";
import articleTwo from "../../Images/article (2).png";
import articleThree from "../../Images/article (3).png";
import Footer from "../Footer/Footer";
import AOS from "aos";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const navigate = useNavigate();
  // Plans Section
  const plans = [
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
      name: "Realization",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];

  //   Thinking People
  const people = [
    {
      image: `${avatarone}`,
      name: "Nattasha Misth",
      address: "Sydney, USA",
      des: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      image: `${avatarTwo}`,
      name: "Raymond Galario",
      address: "Sydney, Australia",
      des: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      image: `${avatarThree}`,
      name: "Benny Roll",
      address: "Sydney, New York",
      des: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
  ];

  // Article
  const article = [
    {
      image: `${articleOne}`,
      details: "Let’s Get Solution For Building Construction Work",
      des: "26 December,2022 ",
    },
    {
      image: `${articleTwo}`,
      details: "Low Cost Latest Invented Interior Designing Ideas.",
      des: "26 December,2022 ",
    },
    {
      image: `${articleThree}`,
      details: "Best For Any Office & Business Interior  Solution",
      des: "26 December,2022 ",
    },
  ];

  return (
    <div className="homeContainer">
      {/* Background Image Section */}
      <div className="background">
        <img src={logoOne} alt="" className="bg" />
        <div className="heading">
          <h1>
            LET YOUR HOME <br />
            BE UNIQUE
          </h1>
          <p className="mt-3">
            There are many variations of the passages of lorem Ipsum <br />
            fromavailable,variations of the passages.
          </p>
          <div className="btn mt-4">
            <p>Get Started</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      {/* End Of background image section */}

      {/* project plans Section */}
      <div
        className="projectContainer"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {plans.map((e) => (
          <div className="cards">
            <h5>{e.name}</h5>
            <p>{e.description}</p>
            <div className="button">
              <p>Read More</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
      {/* End Of project plan section */}

      {/* Art Of styling section */}
      <div className="styleContainer">
        <div
          className="left"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            We Create The Art <br />
            of Stylish Living <br />
            Stylishly
          </h1>
          <p className="mt-4">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="callButton mt-4">
            <img src={call} alt="" className="cll" />
            <div className="callPara mt-3">
              <p>0772894815</p>
              <p>Call us Anytime</p>
            </div>
          </div>
          <div
            className="btn mt-4"
            onClick={() => {
              navigate("/Services");
            }}
          >
            <p>Get Free estimate</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div
          className="right"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={style} alt="" className="stylePic" />
        </div>
      </div>
      {/* End Of art of styling section */}

      {/* People Thinking Section */}
      <div className="thinkingContainer">
        <h2 className="text-center pt-4">
          What the People Thinks <br /> About Us
        </h2>
        <div className="peopleContainer">
          {people.map((e) => {
            return (
              <div
                className="cards"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="avatar">
                  <img src={e.image} alt="" />
                  <div className="address mt-2">
                    <h6>{e.name}</h6>
                    <p>{e.address}</p>
                  </div>
                </div>
                <p className="mt-3">{e.des}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Of people thinking question */}

      {/* Count section */}
      <div className="countContainer">
        <div
          className="cards"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="cardDe">
            <h1>12</h1>
            <p>Years of Experiance</p>
          </div>
          <div className="cardDe">
            <h1>85</h1>
            <p>Success Projects</p>
          </div>
          <div className="cardDe">
            <h1>15</h1>
            <p>Active Projects</p>
          </div>
          <div className="cardDe">
            <h1>95</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      {/* End Of Count Section */}

      {/* Articles And News Section */}
      <div
        className="headingArticle"
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "120px",
          padding: "20px",
        }}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1>Articles & News</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content
          <br /> of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <div className="articleContianer">
        <div className="articleCards">
          {article.map((e) => {
            return (
              <div
                className="cards"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={e.image} alt="" className="articleImage" />
                <h5>{e.details}</h5>
                <p>{e.des}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Of Articles And News Section */}

      {/* Join Section */}
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

export default Home;
