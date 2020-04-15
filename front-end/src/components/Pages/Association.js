import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// COMPONENT
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function Association(props) {
  let problem = props.location.state ? props.location.state.problem : {};

  useEffect(() => {
    if (!props.location.state) {
      return;
    }
    fetch(`http://localhost:3000/problem/${problem._id}/organisations`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container d-flex justify-content-center flex-wrap flex-column">
      <Navbar />
      <h1 className="text-center" id="association_heading">
        {" "}
        They can help you!{" "}
      </h1>

      <div className="container d-flex flex-column justify-content-center ">
        <h3
          className="mx-auto m-3 p-3 bg bg-light rounded border-bottom"
          id="issues_types"
        >
          {problem && problem.title}
        </h3>

        <div className="container ">
          <div className="row">
            {" "}
            <div className="card p-2 m-2 col-3-xs">
              <div className="card-body text-center">
                <h5 className="card-title text-center"> Association Name</h5>
                <p className="card-text">
                  {" "}
                  Here is the place where the description will be.
                </p>
                <button className="btn btn-default btn-primary text-center">
                  <Link to="/" className="text-light text-decoration-none">
                    Visit the page
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              {" "}
              <button className="btn btn-success m-2 font-weight-bolder">
                Get in touch with these organisations
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="col text-center">
              <button
                className="btn bg bg-light text-center"
                title="back to top"
              >
                <Link className="text-decoration-none text-center bg">Top</Link>
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
