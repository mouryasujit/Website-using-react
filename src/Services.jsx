import React from "react";
import imag from "../src/Images/download.jpg";
import Card from "./Card";
import Sdata from "./Sdata";
const Services = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((curr, ind) => {
                return (
                  <Card key={ind} imgsrc={curr.imgsrc} title={curr.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
