import pricingBg from "../../Images/pricing.png";
import "./Pricing.css";
import Footer from "../Footer/Footer";
import AOS from "aos";
import { useEffect } from "react";

function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const plans = [
    {
      head: "Design Advices",
      price: "29",
      partOne: "Genaral Living space advices",
      partTwo: "Renovation Advice",
      partThree: "interiro Design Plans",
      partFour: "Furniture Recognition",
      partFive: "up to % hours Meeting",
    },
    {
      head: "Complete Interior",
      price: "39",
      partOne: "Complete Home Redesign",
      partTwo: "Interiro and Ecteriro Works",
      partThree: "Modular interiro Planing",
      partFour: "Kitchen Designing",
      partFive: "Garage Designing",
    },
    {
      head: "Furniture Desugn",
      price: "59",
      partOne: "Furniture for Living Room",
      partTwo: "Furniture Refurbishment",
      partThree: "sofas and amchairs",
      partFour: "Tables and Chairs",
      partFive: "Kitchens",
    },
  ];
  return (
    <div className="pricingContainer">
      {/* Image section */}
      <img src={pricingBg} alt="" className="priceImage" />
      {/* End OF Image Section */}
      <h1 className="text-center mt-5">Pricing</h1>
      {/* plans Section */}
      <div
        className="planContainer"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {plans.map((e) => {
          return (
            <div className="planCards">
              <h4>{e.head}</h4>
              <h1>${e.price}</h1>
              <p>/month</p>
              <hr />
              <p>{e.partOne}</p>
              <p>{e.partTwo}</p>
              <p>{e.partThree}</p>
              <p>{e.partFour}</p>
              <p>{e.partFive}</p>
            </div>
          );
        })}
      </div>
      {/* End OF Plan Section */}

      {/* Foter Section */}
      <Footer />
    </div>
  );
}

export default Pricing;
