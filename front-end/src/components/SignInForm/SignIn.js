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

const SignIn = props => {
  const [state, setState] = useState(InitState);

  //sending the data to Backend
  //const postRequestToBackend = () => {};

  //handle Log In Button
  const handleLogInButton = e => {
    preventDefault();
  };

  const handleEvent = e => {
    setState({ ...state, ...initErrorState, [e.target.name]: e.target.value });
  };

  return (
    <div className="signInForm">
      <div className="signIn-container">
        <h1>Sign In</h1>
        <form noValidate onSubmit={handleLogInButton}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              value="text"
              required
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value="text"
              required
              onChange={handleEvent}
            />
          </div>
          <div className="loginButton">
            <button type="submit">LOGIN</button>
          </div>
          <h2>Forgot your password?</h2>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

//xreiazetai to button submit handle event?
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
