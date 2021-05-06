// Module
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

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
  console.log("login");
  const [state, setState] = useState(InitState);

  const [login, setLogin] = useState({
    token: "",
    username: "",
    chat: false,
  });

  //Form validating
  const validateLogIn = () => {
    setState({
      ...state,
      initErrorState,
    });

    if (!state.email.includes("@") || state.email === "") {
      setState({
        ...state,
        emailError: "This is an invalid email",
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
    const apiUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.REACT_APP_API_URL 
   /*  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000"; */
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setLogin({
          token: data.jwtToken,
          username: data.username,
          chat: data.chatBoxChecked,
        });
      });
  };
  //redirecting to chat page if chat is clicked
  if (login.chat) {
    //TODO00000 This has to change to chat page
    console.log("logged in");
    return (
      <Redirect
        to={{
          pathname: "/chat",
          state: {
            username: login.username,
          },
        }}
      />
    );
  } else {
    // props.history.push("/");
  }

  //handle Log In Button
  const handleLogInButton = (e) => {
    const isValid = validateLogIn();
    e.preventDefault();
    postRequestToBackend(e);

    /*if (isValid) {
        //to clear the loginForm
        
      }*/
  };

  const handleEvent = (e) => {
    setState({ ...state, ...initErrorState, [e.target.name]: e.target.value });
  };

  return (
    // MAIN CONTAINER
    <div className="container d-flex flex-column justify-content-center rounded col-6 ">
      <h1 className="text-center mb-3"> Sign In </h1>
      {/* CONTAINER FOR THE FIELD */}
      <div className="container d-flex flex-column justify-content-center align-items-center p-3 bg bg-light border rounded col">
        <form noValidate onSubmit={handleLogInButton}>
          {/* EMAIL FIELD */}
          <div className="form-group">
            <label htmlFor="EMAIL" className="font-weight-bolder">
              Email
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
              Password
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
          {/* SIGN IN BUTTONS */}
          <div className="loginButton text-center">
            <button
              type="submit"
              className="btn btn-success font-weight-bolder m-1"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
