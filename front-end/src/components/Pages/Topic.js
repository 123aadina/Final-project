import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

export default function Topic() {
  return (
    <div className="topic_container">
      <h1 className="text-center">Topics</h1>

      <div className="topic_container_box ">
<<<<<<< HEAD
        <div className="col">
          <div className="btn btn-light col-6">
            <Link>Childcare </Link>
          </div>
        </div>
        <div className="col">
          <div className="btn btn-light col-6">
=======
        <div className="row">
          <div className="btn btn-light col-6 mx-auto">
            <Link>Childcare </Link>
          </div>

          <div className="btn btn-light col-6 mx-auto">
>>>>>>> 273c64a9eedb960785fa4872e0dc1fae8f811cde
            {" "}
            <Link to="/">Employement</Link>{" "}
          </div>
        </div>
<<<<<<< HEAD
        <div className="col">
          <div className="btn btn-light col-6">
=======
        <div className="row">
          <div className="btn btn-light col">
>>>>>>> 273c64a9eedb960785fa4872e0dc1fae8f811cde
            {" "}
            <Link to="/">Divorce</Link>{" "}
          </div>
        </div>
<<<<<<< HEAD
        <div className="col">
          <div className="btn btn-light col-6">
            <Link>Domestic Violence </Link>{" "}
          </div>
        </div>
        <div className="col">
          <div className="btn btn-light col-6">
=======
        <div className="row">
          <div className="btn btn-light col">
            <Link to="/">Domestic Violence </Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="btn btn-light col">
>>>>>>> 273c64a9eedb960785fa4872e0dc1fae8f811cde
            {" "}
            <Link to="/">Healthcare</Link>{" "}
          </div>
        </div>
<<<<<<< HEAD
        <div className="col">
          <div className="btn btn-light col-6">
=======
        <div className="row">
          <div className="btn btn-light col">
>>>>>>> 273c64a9eedb960785fa4872e0dc1fae8f811cde
            {" "}
            <Link to="/">Sexual Abuse</Link>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
