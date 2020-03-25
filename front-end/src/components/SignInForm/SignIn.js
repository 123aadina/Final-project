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
  const postRequestToBackend = () => {};

  return (
    <div className="signInForm">
      <div className="signIn-container">
        <h1>Sign In</h1>
        <form noValidate onSubmit={}>
          <label htmlFor="name">
            <input type="name" name="name" value="text" required onChange={} />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value="text"
              required
              onChange={}
            />
          </label>
          <div className="loginButton">
            <button type="login">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

//xreiazetai to button submit?
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
