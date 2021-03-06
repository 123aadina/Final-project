// Module
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();
  let photo = "https://unsplash.it/750/250";
  return (
    //  Homepage
    <div className="container d-flex flex-column justify-content-center align-items-center flex-wrap">
      <div className="col m-auto">
        {/* Welcome message */}
        <h1 className="text-center my-3">{t("welcome.1")}</h1>
        <p className="font-italic text-center">{t("voice.1")}</p>
        {/*<h5 className="text-center  ">{t("thanks.1")}</h5>*/}

        {/* Homepage Big Picture */}
        <div className=" my-2 text-center">
          <img className="img-fluid m-3 rounded" src={photo} alt="" />
        </div>

        {/* Button Get Help - More info */}
        <div
          className="container d-flex justify-content-center my-3 col"
          id="homepage_button"
        >
          <button className="btn btn-light mr-3 border-bottom">
            <Link
              to="/registration"
              className="text-dark font-weight-bold text-decoration-none"
            >
              {" "}
              {t("help.1")}{" "}
            </Link>
          </button>
          <button className="btn btn-light border-bottom mr-3 ">
            <Link
              to="/info"
              className="text-dark font-weight-bold text-decoration-none"
            >
              {" "}
              {t("information.1")}
            </Link>
          </button>
          <button className="btn btn-light border-bottom ">
            <Link
              to="/login"
              className="text-dark font-weight-bold text-decoration-none"
            >
              {" "}
              {t("Chat.1")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
