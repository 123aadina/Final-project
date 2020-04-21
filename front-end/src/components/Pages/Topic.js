import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function Topic() {
  const [problems, changeProblems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/problem")
      .then((res) => res.json())
      .then((data) => changeProblems(data))
      .catch((error) => console.log(error));
  });

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
          {problems.map((problem) => {
            return (
              <div className="col-6 mx-auto text-center text-uppercase  ">
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
      <Footer />
    </div>
  );
}
