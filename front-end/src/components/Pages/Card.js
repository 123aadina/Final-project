import React from "react";

export default function Card(props) {
  return (
    <div className="card mx-2 my-2 col-3-xs col-3-sm problems_cards">
      <div className="card-body text-center d-flex flex-column">
        <h5 className="card-title text-center "> {props.name}</h5>
        <p className="card-text"> {props.description}</p>
        <button className="btn btn-primary text-center mt-auto problem-btn mx-auto">
          <a
            href={props.link}
            target="_blank"
            className="text-light text-decoration-none"
          >
            Visit the page
          </a>
        </button>
      </div>
    </div>
  );
}
