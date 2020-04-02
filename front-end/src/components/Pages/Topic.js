import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
//import Dashboard from "../ChatApp/Dashboard";
import { Link } from "react-router-dom";

export default function Topic() {
  return (
    <div className="topic_container">
      
      <h1 className="text-center">Topics</h1>

      <div className="topic_container_box ">
        <div className="row">
          <div className="btn btn-light col-6">
            <Link>Childcare </Link>
          </div>
        </div>
        <div className="row">
          <div className="btn btn-light col-6">
            {" "}
            <Link>Employement</Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="btn btn-light col-6">
            {" "}
            <Link>Divorce</Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="btn btn-light col-6">
            <Link>Domestic Violence </Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="btn btn-light col-6">
            {" "}
            <Link>Healthcare</Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="btn btn-light col-6">
            {" "}
            <Link>Sexual Abuse</Link>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
