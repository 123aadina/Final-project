import React, { useState } from "react";
import { Link } from "react-router-dom";

const initErrorState = {
  nameError: "",
  passwordError: ""
};

const InitState = {
  name: "",
  password: "",
  ...initErrorState
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
  const postRequestToBackend = () => {
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
      console.log("Response: ");
      console.log(resp);
    });
  };

  //handle Log In Button
  const handleLogInButton = e => {
    //clear the form
    e.preventDefault();
    postRequestToBackend();
    e.preventDefault();
  };

  const handleEvent = e => {
    setState({ ...state, ...initErrorState, [e.target.name]: e.target.value });
  };

  return (
    // MAIN CONTAINER
    <div className="container d-flex flex-column justify-content-center my-2 p-5 rounded col ">
      <h1 className="text-center"> Sign In </h1>
      {/* CONTAINER FOR THE FIELD */}
      <div className="container d-flex flex-column justify-content-center align-items-center p-5  bg bg-light border rounded col">
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

//Sending the data to Backend
//const postRequestToBackend = () => {
// let RequestLogInFormBody = JASON.stingify ({
// name:state.name,
// password:state.password
//       })
//       fetch (http://localhost:8000/signin){
// method:POST,
//     headers: { "Content-Type": "application/json" },
//       body: requestBody
//     }).then(resp => {
//       console.log("Response: ");
//       console.log(resp);
//     });
// //   };
