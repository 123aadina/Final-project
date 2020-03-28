import React, { useState } from "react";

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
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody
    }).then(resp => {
      if (resp.status != 200) {
        setState({
          ...state,
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
    <div className="logInForm">
      <div className="logIn-container">
        <h1>Sign In</h1>
        <form noValidate onSubmit={handleLogInButton}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              value={state.name}
              required
              onChange={handleEvent}
            />
          </div>
          <div style={errorTextStyle}>{state.nameError}</div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleEvent}
            />
          </div>
          <div style={errorTextStyle}>{state.passwordError}</div>
          <div className="loginButton">
            <button type="submit">LOGIN</button>
          </div>
          <h2>Forgot your password?</h2>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

//xreiazetai to button submit handle event?
//the name and the password has to match auto tha ginei sto backend

//episis xreiazomaste kai ena forgot password to reset it!!!
//Not to forget that we should have a route for that!!!!
//tha xreiastw middleware error handler?
//authodication?
//to token tha paei sto login
// app.get("/user/:id", (req, res) => {
//  user.password = users.map(user =>{
//    return user;
//  })
// }// Login a specific user
// app.get("/login", (req, res) => {});
