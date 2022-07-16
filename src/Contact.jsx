import React, { useState } from "react";

const Contact = () => {
  const [Add, setAdd] = useState({
    Fullname: "",
    Email: "",
    Phone: "",
  });

  const imputEvent = (e) => {
    const { name, value } = e.target;

    setAdd((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Welcome" + " " + Add.Fullname + " 💁‍♂️ ");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Fullname"
                  value={Add.Fullname}
                  onChange={imputEvent}
                  placeholder="Enter Your Name"
                  autoComplete="none"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="Phone"
                  value={Add.Phone}
                  onChange={imputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={Add.Email}
                  onChange={imputEvent}
                  placeholder="Enter your Email"
                  autoComplete="none"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
