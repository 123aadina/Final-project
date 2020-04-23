import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Components
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Dashboard from "../ChatApp/Dashboard";

const Home = () => {
  const { t, i18n } = useTranslation();
  let photo = "https://unsplash.it/750/250";
  return (
    //  Homepage_container -->  Main container
    <div className="container d-flex flex-column justify-content-center align-items-center flex-wrap">
      <Navbar />
      <div className="col m-auto">
        {/* Welcome message */}
        <h1 className="text-center my-3">{t("welcome.1")}</h1>
        <p className="font-italic text-center">
          " Women Voice help you to find informations in order to solve the
          issues that you might have in Germany "
        </p>
        <h5 className="text-center  ">{t("thanks.1")}</h5>

        {/* Welcome Pictures */}
        <div className=" my-2 text-center">
          <img className="img-fluid m-3 rounded" src={photo} alt="" />
        </div>

        {/* Call to action buttons */}
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
              Get Help{" "}
            </Link>
          </button>
          <button className="btn btn-light border-bottom mr-3 ">
            <Link
              to="/info"
              className="text-dark font-weight-bold text-decoration-none"
            >
              {" "}
              Get more <br></br> informations{" "}
            </Link>
          </button>
          <button className="btn btn-light border-bottom ">
            <Link
              to="/login"
              className="text-dark font-weight-bold text-decoration-none"
            >
              {" "}
              Chat with us
            </Link>
          </button>
        </div>
        <Footer />
        {/* <Dashboard /> */}
      </div>
    </div>
  );
};
export default Home;
