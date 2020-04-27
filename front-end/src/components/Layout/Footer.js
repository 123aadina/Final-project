import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="container mb-2">
      <ul className="d-flex justify-content-center align-items-center list-unstyled flex-wrap">
        <li className="mx-2 pt-3 pl-3">
          <Link to="/" className="text-secondary">
            {" "}
            {t("home.1")}{" "}
          </Link>
        </li>
        <li className="mx-2 pt-3 ">
          <Link to="/login" className="text-secondary">
            {" "}
            {t("Login.1")}{" "}
          </Link>
        </li>
        <li className="mx-2 pt-3">
          <Link to="/info" className="text-secondary">
            {" "}
            {t("Info.1")}{" "}
          </Link>
        </li>
        <li className="mx-2 pt-3 ">
          <Link to="/registration" className="text-secondary">
            {" "}
            {t("Register.1")}{" "}
          </Link>
        </li>

        <li className="mx-2 pt-3 ">
          <Link to="/topic" className="text-secondary">
            {" "}
            {t("Topics.1")}{" "}
          </Link>
        </li>
      </ul>

      <div className="text-secondary text-center">
        {" "}
        All right reserved @ Women's Help{" "}
      </div>
    </footer>
  );
};

export default Footer;
