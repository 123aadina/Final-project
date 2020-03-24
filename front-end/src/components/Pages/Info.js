import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="info_container mt-3">
      <h1> Women's rights in Germany </h1>
      <div className="info_container_description ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          doloribus, inventore ducimus molestias incidunt maiores obcaecati
          repellendus iste. Ratione soluta sint maiores explicabo tempore sunt
          delectus rem, iusto facere vel.
        </p>
      </div>

      <button className="info_buttons ">
        <Link to="/Info"> Get more Issues </Link>
      </button>
      <button>
        <Link to="/register"> Get Help </Link>
      </button>
      <Footer />
    </div>
  );
};

export default Info;
