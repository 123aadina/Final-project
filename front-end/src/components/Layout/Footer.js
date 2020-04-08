import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container ">
      <ul className="d-flex justify-content-center align-items-center list-unstyled">
        <li className="mx-2 pt-3 pl-3">
          <Link to="/" className="text-secondary">
            {" "}
            Homepage{" "}
          </Link>
        </li>
        <li className="mx-2 pt-3">
          <Link to="/info" className="text-secondary">
            {" "}
            Info{" "}
          </Link>
        </li>
        <li className="mx-2 pt-3 ">
          <Link to="/registration" className="text-secondary">
            {" "}
            Register{" "}
          </Link>
        </li>

        <li className="mx-2 pt-3 ">
          <Link to="/topic" className="text-secondary">
            {" "}
            Topics{" "}
          </Link>
        </li>
        <li className="mx-2 pt-3 ">
          <Link to="/login" className="text-secondary">
            {" "}
            Login{" "}
          </Link>
        </li>

        <li className="mx-2 pt-3 ">
          <Link to="/association" className="text-secondary">
            {" "}
            Association{" "}
          </Link>
        </li>

        <li className="mx-2 pt-3 text-secondary"> Copyright @ Women Voice </li>
      </ul>
    </footer>
  );
};

export default Footer;
