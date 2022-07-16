import React from "react";
import { NavLink } from "react-router-dom";
import img from "../src/Images/rocket.webp";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Knowledge with"
        Btn="Get Started"
        img={img}
        Goto="Services"
      />
    </>
  );
};
export default Home;
