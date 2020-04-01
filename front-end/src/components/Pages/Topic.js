import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

export default function Topic() {
  return (
    <div
      className="container d-flex flex-column justify-content-center col my-5"
      id="topic_container"
    >
      <h1 className="text-center"> Topics </h1>

      <div
        className=" container d-flex flex-column justify-content-center col my-5"
        id="topic_container_box"
      >
        <div className="row">
          <div className="card col-4   mx-auto mb-3 justify-content-center text-center p-3 text-uppercase shadow p-3 bg-white rounded">
            <Link className="text-decoration-none text-dark "> Childcare </Link>
          </div>

          <div className="card col-4   mx-auto mb-3 justify-content-center text-center p-3 text-uppercase shadow p-3 bg-white rounded">
            {" "}
            <Link to="/" className="text-decoration-none text-dark">
              {" "}
              Employement{" "}
            </Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="card col-4   mx-auto mb-3 justify-content-center text-center p-3 text-uppercase shadow p-3 bg-white rounded">
            <Link className="text-decoration-none text-dark"> Divorce </Link>
          </div>

          <div className="card col-4   mx-auto mb-3 justify-content-center text-center p-3 text-uppercase shadow p-3 bg-white rounded">
            {" "}
            <Link to="/" className="text-decoration-none text-dark">
              {" "}
              Domestic Violence{" "}
            </Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="card col-4   mx-auto mb-3 justify-content-center text-center p-3 text-uppercase shadow p-3 bg-white rounded">
            <Link className="text-decoration-none text-dark">Healthcare </Link>
          </div>

          <div className="card col-4   mx-auto mb-3 justify-content-center text-center p-3 text-uppercase shadow p-3 bg-white rounded">
            {" "}
            <Link to="/" className="text-decoration-none text-dark ">
              Sexual Abuse{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
