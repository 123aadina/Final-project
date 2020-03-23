import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="homepage_footer mt-5">
      <footer>
        <ul>
          <li className="mx-2 pt-3 pl-3">
            <Link to="/" className="text-secondary">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="mx-2 pt-3">
            <Link to="/info" className="text-secondary">
              {" "}
              Info{" "}
            </Link>
          </li>
          <li className="mx-2 pt-3 text-secondary">
            Women Voice 2020 @ All right reserved
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
