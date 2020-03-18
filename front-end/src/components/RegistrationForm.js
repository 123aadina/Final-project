import React, { useState } from "react";
import { Checkboxes, CheckBoxBase } from "./Checkboxes";
import DropdownList from "./DropdownList";

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
          "Password must contain at least 8 characters, an uppercase,and a special character "
      });
      return false;
    }
    const reg = "^+[0-9]+$";
    if (!state.phone.match(reg) || state.phone < 13) {
      setState({
        ...state,
        phoneError: "Please fill in a correct phone number"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    console.log("ENTERED VALIDATION");
    const isValid = validateForm();

    console.log(isValid);
    if (!isValid) {
      console.log(isValid);
      //to discard default behaviors onSubmit event den svinei ta stoixeia tis formas kathe fora pou ta ipovallei o xristi
      e.preventDefault();
      return;
    }
    console.log(state);
    //to clear the form
    setState(initialState);
  };

  const handleEvent = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ fontFamily: "Montserrat" }} className="container">
      <div className="Registration-Form">
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
        <form noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name* </label>
            <input
              type="text"
              name="Name "
              value={state.name}
              required
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleEvent}
            />
          </div>
          <CheckBoxBase textValue="I don't have an email" />
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={state.phone}
              required
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="issues">Issues* </label>
            <DropdownList />
          </div>
          <div>
            <label htmlFor="languages">Languages* </label>
            <input type="text" name="languages" value="" />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <input type="text" name="comment" value="" />
          </div>
          <div className="informationText">
            <p>We will use this information on your behalf to help you</p>
          </div>
          <Checkboxes />
          <div className="submitButton">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
