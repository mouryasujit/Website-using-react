import React from "react";
import { NavLink } from "react-router-dom";
import images from "../src/Images/rocket.webp";

const Common = (props) => {
  return (
    <>
      <section>
        <div
          id="header"
          className="d-flex align-items-center justify-content-center mt-10"
        >
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      {props.name}
                      <br />

                      <strong className=" link-primary">
                        {" "}
                        SujitKumar Mourya and Co.
                      </strong>
                    </h1>
                    <h2 className="my-3">
                      We are a team of talented developers.
                    </h2>
                    <div className="mt-3">
                      <NavLink
                        to={props.Goto}
                        className="btn btn-outline-primary rounded-pill "
                      >
                        {props.Btn}
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={props.img}
                      className="img-fluid img-thumbnail animated"
                      alt=" Common page-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
