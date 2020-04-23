import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card p-2 m-2 col-3-xs col-sm">
      <div className="card-body text-center">
        <h5 className="card-title text-center "> {props.name}</h5>
        <p className="card-text"> {props.description}</p>
        <button className="btn btn-default btn-primary text-center">
          <a href={props.link} className="text-light text-decoration-none">
            Visit the page
          </a>
        </button>
      </div>
    </div>
  );
}
