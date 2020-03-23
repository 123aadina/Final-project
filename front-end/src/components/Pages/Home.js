import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";

const Home = () => {
  const { t, i18n } = useTranslation();
  let photo = "https://unsplash.it/845/280";
  return (
    //  Homepage_container -->  Main container
    <div className="homepage_container my-2">
      {/* Welcome message */}
      <h1>{t("welcome.1")}</h1>
      <p className="font-italic">
        " Women Voice help you to find usefull informations in order to solve
        the issues that you might have in Germany "
      </p>
      <h5>{t("thanks.1")}</h5>

      {/* Welcome Pictures */}
      <div className="homepage_pictures my-2 ">
        <img className="m-3 rounded" src={photo} alt="" />
      </div>

      {/* Call to action buttons */}
      <div className="homepage_buttons mb-1  ">
        <button className="btn btn-light mr-3 border-bottom">
          <Link to="/registration" className="text-dark font-weight-bold">
            {" "}
            Get Help{" "}
          </Link>
        </button>
        <button className="btn btn-light border-bottom ">
          <Link to="/" className="text-dark font-weight-bold ">
            {" "}
            Get more <br></br> informations{" "}
          </Link>
        </button>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
