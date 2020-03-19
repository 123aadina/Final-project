import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pg-primary">
      <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/registration">Register</Link>
          </li>
        </ul>
        footer
      </footer>
    </div>
  );
};

export default Footer;
