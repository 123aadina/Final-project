import React, { useState } from "react";
import CheckBoxBase from "./Checkboxes";
import DropdownList from "./DropdownList";

const initialState = {
  name: "",
  email: "",
  emailChecked: false,
  password: "",
  phone: "",
  languages: "",
  comment: "",
  agreeChecked: false,
  nameError: "",
  emailError: "",
  passwordError: "",
  phoneError: ""
};

const RegistrationForm = props => {
  const [state, setState] = useState(initialState);

  const handleAgreeCheckbox = e => {
    setState({
      ...state,
      agreeChecked: e.target.checked
    });
  };

  const handleEmailCheckbox = e => {
    setState({
      ...state,
      emailChecked: e.target.checked
    });
  };

  //form validators
  const validateForm = () => {
    setState({
      ...state,
      nameError: "",
      emailError: "",
      passwordError: "",
      phoneError: "",
      languagesError: "",
      commentError: "",
      acceptTermsError: ""
    });
    if (state.name.length < 2 || state.name.length > 15) {
      setState({
        ...state,
        nameError: "Name should be more than 2 characters long"
      });
      return false;
    }

    if (
      !state.email.includes("@") ||
      (state.email === "" && !state.emailChecked === true)
    ) {
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
    if (state.language.length < 2 || state.language.length > 30) {
      setState({
        ...state,
        languagesError: "Please choose a language"
      });
      return false;
    }

    if (state.comment.length < 10 || state.comment.length > 100) {
      setState({
        ...state,
        commentError:
          "You can fill in some information to let us know how can we help you"
      });
      return false;
    }

    if (!state.agreeChecked) {
      setState({
        ...state,
        agreeTermsError: "Please accept the terms and conditions."
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
    <div className="container">
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
              name="name"
              value={state.name}
              required
              onChange={handleEvent}
            />
            {state.nameError}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleEvent}
            />
            {state.emailError}
          </div>
          <CheckBoxBase
            textValue="I don't have an email"
            onChange={handleEmailCheckbox}
          />
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={state.phone}
              required
              onChange={handleEvent}
            />
            {state.phoneError}
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
            {state.passwordError}
          </div>
          <div>
            <label htmlFor="issues">Issues* </label>
            <DropdownList />
          </div>
          <div>
            <label htmlFor="languages">Languages* </label>
            <input
              type="text"
              name="languages"
              value={state.languages}
              placeholder="Which languages do you speak ?"
              onChange={handleEvent}
            />
            {state.languagesError}
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <input
              type="text"
              name="comment"
              value={state.comment}
              placeholder="I would like to get help with..."
              onChange={handleEvent}
            />
            {state.commentError}
          </div>
          <CheckBoxBase
            textValue="I agree to the terms and conditions."
            onChange={handleAgreeCheckbox}
          />
          {state.acceptTermsError}
          <div className="submitButton">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
