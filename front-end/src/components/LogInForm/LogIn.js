import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";


const initErrorState = {
  emailError: "",
  passwordError: "",
};

const InitState = {
  email: "",
  password: "",
  ...initErrorState,
};

const errorTextStyle = {
  color: "red",
  fontSize: "12px",
};

const LogIn = (props) => {
  const [state, setState] = useState(InitState);

  //Validating the form
  const validateLogIn = () => {
    setState({
      ...state,
      initErrorState,
    });

    if (!state.email.includes("@") || state.email === "") {
      setState({
        ...state,
        emailError: "Email is not valid",
      });
      return false;
    }

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!state.password.match(strongRegex) || state.password === "") {
      setState({
        ...state,
        passwordError: "Password is not valid ",
      });
      return false;
    }
    return true;
  };

  //Sending the data to Backend
  const postRequestToBackend = (e) => {
    let successful = true;
    let requestBody = JSON.stringify({
      email: state.email,
      password: state.password,
    });
    console.log("Fetching ");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    }).then((resp) => {
      if (resp.status != 200) {
        setState({
          //kai edw tha paei me to email i to pass?
          ...state,
          passwordError: "Password is not valid.",
        });
      } else {
        console.log(resp.json());
        setState(InitState);
      }
    });
  };

  //handle Log In Button
  const handleLogInButton = (e) => {
    const isValid = validateLogIn();
    e.preventDefault();

    if (isValid) {
      //to clear the loginForm
      postRequestToBackend(e);
    }
  };

  const handleEvent = (e) => {
    setState({ ...state, ...initErrorState, [e.target.email]: e.target.email });
  };

  return (
    // MAIN CONTAINER
    <div className="container d-flex flex-column justify-content-center rounded col-6 ">
      <Navbar />
      <h1 className="text-center"> Sign In </h1>
      {/* CONTAINER FOR THE FIELD */}
      <div className="container d-flex flex-column justify-content-center align-items-center p-3 bg bg-light border rounded col">
        <form noValidate onSubmit={handleLogInButton}>
          {/* EMAIL FIELD */}
          <div className="form-group">
            <label htmlFor="EMAIL" className="font-weight-bolder">
              {" "}
              Email{" "}
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={state.email}
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
