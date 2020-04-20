import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";


const initErrorState = {
  nameError: "",
  passwordError: ""
};

const InitState = {
  name: "",
  password: "",
  ...initErrorState
};

const errorTextStyle = {
  color: "red",
  fontSize: "12px"
};

const LogIn = props => {
  const [state, setState] = useState(InitState);

  //Validating the form
  const validateLogIn = () => {
    setState({
      ...state,
      initErrorState
    });

    if (state.name === "" || state.name < 2 || state.name > 70) {
      setState({
        ...state,
        nameError: "Name is not correct"
      });
      return false;
    }

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!state.password.match(strongRegex) || state.password === "") {
      setState({
        ...state,
        passwordError: "Password is not valid "
      });
      return false;
    }
    return true;
  };

  //Sending the data to Backend
  const postRequestToBackend = e => {
    let successful = true;
    let requestBody = JSON.stringify({
      name: state.name,
      password: state.password
    });
    console.log("Fetching ");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody
    }).then(resp => {
      if (resp.status != 200) {
        setState({
          ...state,//res.json({ jwtToken: token, username: user.name })
          passwordError: "Password is not valid."
        });
      } else {
        console.log(resp.json());
        setState(InitState);
      }
    });
  };

  //handle Log In Button
  const handleLogInButton = e => {
    const isValid = validateLogIn();
    e.preventDefault();

    if (isValid) {
      //to clear the loginForm
      postRequestToBackend(e);
    }
  };

  const handleEvent = e => {
    setState({ ...state, ...initErrorState, [e.target.name]: e.target.value });
  };

  return (
    // MAIN CONTAINER
    <div className="container d-flex flex-column justify-content-center rounded col-6 ">
      <Navbar />
      <h1 className="text-center"> Sign In </h1>
      {/* CONTAINER FOR THE FIELD */}
      <div className="container d-flex flex-column justify-content-center align-items-center p-3 bg bg-light border rounded col">
        <form noValidate onSubmit={handleLogInButton}>
          {/* NAME FIELD */}
          <div className="form-group">
            <label htmlFor="name" className="font-weight-bolder">
              {" "}
              Name{" "}
            </label>
            <input
              className="form-control"
              type="name"
              name="name"
              value={state.name}
              required
              onChange={handleEvent}
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bolder ">
              {" "}
              Password{" "}
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleEvent}
            />
          </div>
          <Link>
            <h6> Forgot your password? </h6>
          </Link>
          {/* BUTTON LOGIN */}
          <div className="loginButton text-center">
            <button
              type="submit"
              className="btn btn-success font-weight-bolder m-1"
            >
              {" "}
              Sign In{" "}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
