import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Navbar = ({ icon, title }) => {
  const { t, i18n } = useTranslation();

  const handleOnClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-xs col justify-content-center d-flex flex-row m-2">
      {/* <Link to="/">
        
        <i className={icon}></i>
      </Link> */}
      <ul className="navbar-nav row text-center d-flex flex-row justify-content-center">
        <li className=" col ">
          <button
            onClick={() => handleOnClick("ar")}
            className="btn btn-light mx-2 "
          >
            Arabic
          </button>
        </li>
        <li className="col">
          {" "}
          <button
            onClick={() => handleOnClick("de")}
            className="nav-item btn btn-light mx-2"
          >
            Deutsch
          </button>
        </li>
        <li className="col">
          {" "}
          <button
            onClick={() => handleOnClick("en")}
            className="nav-item btn btn-light mx-2"
          >
            English
          </button>
        </li>

        <li className="col">
          <button
            onClick={() => handleOnClick("fe")}
            className="nav-item btn btn-light mx-2"
          >
            French
          </button>
        </li>
        <li className="col">
          <button
            onClick={() => handleOnClick("fr")}
            className="nav-item btn btn-light mx-2"
          >
            Farsi
          </button>
        </li>

        <li className="col">
          <button
            onClick={() => handleOnClick("tu")}
            className="nav-item btn btn-light"
          >
            Turkish
          </button>
        </li>
      </ul>
      <h1>
        <i className={title}></i>
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "fas fa-bars",
  title: "hello",
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Navbar;

//<i class="fas fa-bars"></i>
//<Link to='/'>Home</Link>
//<Link to='/about'>About</Link>
