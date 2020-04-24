import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// COMPONENT
import Navbar from "../Layout/Navbar";
import Card from "../Pages/Card";

export default function Association(props) {
  const { t, i18n } = useTranslation();
  let problem = props.location.state ? props.location.state.problem : {};

  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!props.location.state) {
      return;
    }
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";
    console.log(apiUrl);
    fetch(`${apiUrl}/problem/${problem._id}/organisations`)
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(cards);

  return (
    <div className="container d-flex justify-content-center flex-wrap flex-column">
      <Navbar />

      <div className="container d-flex flex-column justify-content-center ">
        <h3
          className="mx-auto m-3 p-3 bg bg-light rounded border-bottom"
          id="issues_types"
        >
          {problem && problem.title}
        </h3>

        <div className="container ">
          <div className="row">
            {cards.map((card) => {
              return (
                <Card
                  name={card.name}
                  description={card.description}
                  link={card.link}
                />
              );
            })}
          </div>
          <div className="row">
            {/* <div className="col text-center">
              {" "}
              <button className="btn btn-success m-2 font-weight-bolder">
                Get in touch with these organisations
              </button>
            </div> */}
          </div>
          <div className="row mt-2">
            <div className="col text-center">
              <button
                className="btn bg bg-light text-center"
                title="back to top"
              >
                <Link className="text-decoration-none text-center bg">Top</Link>
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
