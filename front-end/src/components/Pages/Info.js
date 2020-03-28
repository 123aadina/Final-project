import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import Topic from "./Topic";

const Info = () => {
  return (
    <div className="info_container mt-3">
      <h1 className="text-center"> Women's rights in Germany </h1>
      <div className="info_container_description ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          doloribus, inventore ducimus molestias incidunt maiores obcaecati
          repellendus iste. Ratione soluta sint maiores explicabo tempore sunt
          delectus rem, iusto facere vel.
        </p>
      </div>

      <div className="info_buttons ">
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
