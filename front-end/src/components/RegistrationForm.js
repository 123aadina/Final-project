import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  phoneError: ""
};

const RegistrationForm = props => {
  const [state, setState] = useState(initialState);

  //form validators
  const validateForm = () => {
    setState({
      ...state,
      nameError: "",
      emailError: "",
      passwordError: "",
      phoneError: ""
    });
    if (state.name.length < 2 || state.name.length > 15) {
      setState({
        ...state,
        nameError: "Name should be more than 2 characters long"
      });
      return false;
    }
    if (!state.email.includes("@")) {
      setState({
        ...state,
        emailError: "Please provide a valid email"
      });
      return false;
    }
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!state.password.match(strongRegex)) {
      setState({
        ...state,
        passwordError:
          "Password must contain at least 8 characters, an uppercase letter,and a special character "
      });
      return false;
    }
    const reg = "^[0-9]+$";
    if (!state.phone.match(reg) || state.phone < 13) {
      setState({
        ...state,
        phoneError: "Please fill in a correct phone number"
      });
      return false;
    }
    return true;
  };

  //to discard default behaviors onSubmit event den svinei ta stoixeia tis formas kathe fora pou ta ipovallei o xristi
  // onSubmit = e => {
  //   e.preventDefault(); onSubmit={onSubmit}

  return (
    <div style={{ fontFamily: "Montserrat" }} className="container">
      <div className="Registration Form">
        <div className="registrationBox">
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "200px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
              textAlign: "center"
            }}
          >
            Registration Form
          </h1>
        </div>
        <form noValidate>
          <div>
            <label htmlFor="Name">Name* </label>
            <input type="text" name="Name " value={state.name} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={state.email} required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" value={state.phone} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={state.password}
              required
            />
          </div>
          <div>
            <label htmlFor="issues">Issues* </label>
            <input type="text" name="issues" value="" />
          </div>
          <div>
            <label htmlFor="languages">Languages* </label>
            <input type="text" name="languages" value="" />
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <input type="text" name="comment" value="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
