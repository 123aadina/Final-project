import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import Navbar from "../Layout/Navbar";

export default function Topic() {
  const { t, i18n } = useTranslation();
  const [problems, changeProblems] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";
    fetch(`${apiUrl}/problem`)
      .then((res) => res.json())
      .then((data) => changeProblems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center col"
      id="topic_container"
    >
      <Navbar />
      <h1 className="text-center"> Topics </h1>

      <div
        className=" container d-flex flex-column justify-content-center col my-5"
        id="topic_container_box"
      >
        <div className="row">
          {problems.map((problem, id) => {
            return (
              <div key={id} className="col-6 mx-auto text-center text-uppercase  ">
                <div className="card m-2 bg-white rounded shadow p-3">
                  <Link
                    className="text-decoration-none text-darker justify-content-center text-dark"
                    to={{
                      pathname: "/association",
                      state: {
                        problem: problem,
                      },
                    }}
                  >
                    {problem.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
