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

  //handle Log In Button
  const handleLogInButton = e => {
    //clear the form
    e.preventDefault();
  };

  const handleEvent = e => {
    setState({ ...state, ...initErrorState, [e.target.name]: e.target.value });
  };

  return (
    <div className="login_container ">
      <div className="container d-flex flex-column justify-content-center ">
        <h1 className="text-center"> Sign In </h1>
        <form noValidate onSubmit={handleLogInButton}>
          {/* NAME FIELD */}
          <div>
            <label htmlFor="name"> Name </label>
            <input
              type="name"
              name="name"
              value={state.name}
              required
              onChange={handleEvent}
            />
          </div>

          {/* PASSWORD FIELD */}
          <div>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleEvent}
            />
          </div>

          {/* BUTTON LOGIN */}
          <div className="loginButton">
            <button
              type="submit"
              className="btn btn-success m-3 font-weight-bolder"
            >
              {" "}
              Login{" "}
            </button>
          </div>
          <h6> Forgot your password? </h6>
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
