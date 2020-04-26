import React from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

// Components
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Topic from "./Topic";

const Info = () => {
  return (
    <div
      className="container d-flex justify-content-center flex-wrap flex-column "
      id="info_container"
    >
      <Navbar />
      <h1 className="text-center "> Women's rights in Germany </h1>
      <div
        className="container d-flex justify-content-center align-items-center col mx-auto col-xs"
        id="info_container_description"
      >
        <p className="justify-content-center bg bg-light text-center  align-items-center p-5">
          <ShowMoreText
            /* Default options */
            lines={10}
            more="Show more"
            less="Show less"
            anchorClass=""
            expanded={false}
          >
            Germany is one of the European countries that receive the highest
            number of refugees for the last years, with around 468 thousand
            asylum seekers in the first half of 2016.One third of those
            currently seeking refuge in Germany are women. Children, women and
            men have equal rights and opportunities in Germany.This means that
            protection is equally available to all. Sexual abuse, trafficking in
            women, domestic violence, forced marriage are human rights
            violations unfortunately affect women and children almost
            exclusively. In Germany, victims of violence have the right to a
            range of protective measures. Every person has the right to live a
            life free of violence.When a partner is becoming acutely violent,
            call the police by dialling 110 or go to a police station. The
            police are obliged to attend immediately in order to protect the
            person. Women affected by violence can get assistance, support and
            advice regarding further protection options from counselling
            centres, women’s refuges, victim support services and violence
            prevention hotlines (see also the section on referrals).Specialist
            counselling centres provide information about next steps –
            independent of a crime being reported. Such a report can still be
            made later. Anonymous counselling is available on request.If you
            plan to report a crime, always get legal advice.In principle, staff
            at specialist counselling centres, (female) doctors and lawyers are
            subject to professional confidentiality. Germany has taken a number
            of initiatives aimed at early intervention, for example by opening
            the so-called Integration Courses. Language training is the
            cornerstone of integration policy in Germany and the number of
            available places in the Integration Course has been
            increased.Integration and German language courses are improving
            refugees' chances of finding work European laws guarantee the rights
            of divorced women, with the state securing the children’s education,
            house expenses and costs of living, if they are unable to work.
            Germany is also making progress towards integrating its large
            refugee population into the labour market, but only 13% employed are
            female and two thirds earned below the low-wage threshold in 2018.
          </ShowMoreText>
        </p>
      </div>

      <div
        className="container d-flex justify-content-center flex-row my-3 "
        id="info_button"
      >
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
