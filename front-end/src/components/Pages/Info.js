import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Topic from "./Topic";

const Info = () => {
  return (
    <div
      className="container d-flex justify-content-center flex-wrap flex-column "
      id="info_container"
    >
      <Navbar />
      <h1 className="text-center "> Women's rights in Germany </h1>
      <div
        className="container d-flex justify-content-center align-items-center col mx-auto col-xs"
        id="info_container_description"
      >
        <p className="justify-content-center bg bg-light text-center p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          doloribus, inventore ducimus molestias incidunt maiores obcaecati
          repellendus iste. Ratione soluta sint maiores explicabo tempore sunt
          delectus rem, iusto facere vel.
        </p>
      </div>

      <div
        className="container d-flex justify-content-center flex-row my-3 "
        id="info_button"
      >
        <button className="btn btn-light mr-3 border-bottom">
          <Link to="/" className="text-dark font-weight-bold ">
            {" "}
            Homepage{" "}
          </Link>
        </button>
        <button className="btn btn-light mr-3 border-bottom">
          <Link to="/topic" className="text-dark font-weight-bold ">
            {" "}
            Move to <br></br>the Issues Topic{" "}
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
