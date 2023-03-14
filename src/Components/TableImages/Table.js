import React from "react";
import "./Table.css";
import AOS from "aos";
import { useEffect } from "react";
// Images
import one from "../ProjectsImages/project (1).png";
import two from "../ProjectsImages/project (2).png";
import three from "../ProjectsImages/project (3).png";
import four from "../ProjectsImages/project (4).png";
import five from "../ProjectsImages/project (5).png";
import six from "../ProjectsImages/project (6).png";
import seven from "../ProjectsImages/project (7).png";

function Table() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const images = [
    {
      image: `${one}`,
    },
    {
      image: `${two}`,
    },
    {
      image: `${three}`,
    },
    {
      image: `${four}`,
    },
    {
      image: `${five}`,
    },
    {
      image: `${six}`,
    },
    {
      image: `${seven}`,
    },
  ];
  return (
    <div className="tabImageContainer">
      {images.map((e) => {
        return (
          <img
            className="tabI"
            src={e.image}
            alt=""
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
        );
      })}
    </div>
  );
}

export default Table;
