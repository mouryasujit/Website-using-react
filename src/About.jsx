import React from "react";
import { NavLink } from "react-router-dom";
import image from "../src/Images/rocket.webp";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome To About Us page"
        Btn="Contact Now"
        img={image}
        Goto="/contact"
      />
    </>
  );
};
export default Home;
