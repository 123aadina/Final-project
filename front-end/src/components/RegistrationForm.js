import React, { useState, useEffect } from "react";
import CheckBoxBase from "./Checkboxes";
import DropdownList from "./DropdownList";
import "../App.css";

const initErrorState = {
  nameError: "",
  emailError: "",
  passwordError: "",
  phoneError: "",
  languagesError: "",
  commentError: "",
  agreeTermsError: ""
};

const initialState = {
  name: "",
  email: "",
  emailChecked: false,
  password: "",
  issues: 0,
  phone: "",
  languages: "",
  comment: "",
  agreeChecked: false,
  ...initErrorState
};

const errorTextStyle = {
  color: "red",
  fontSize: "12px"
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
  //to change the state of the dropdown menu on the form
  const handleIssueDropdown = category => {
    setState({
      ...state,
      issues: category
    });
  };

  //form validators
  const validateForm = () => {
    setState({
      ...state,
      ...initErrorState
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

    const reg = new RegExp("^([+]{0,1})([0-9]+)");
    if (!state.phone.match(reg) || state.phone.length > 13) {
      setState({
        ...state,
        phoneError: "Please fill in a correct phone number"
      });
      return false;
    }

    if (state.languages.length > 30) {
      setState({
        ...state,
        languagesError: "Please choose a language"
      });
      return false;
    }

    if (state.comment.length > 100) {
      setState({
        ...state,
        commentError:
          "You can fill in some information to let us know how can we help you"
      });
      return false;
    }
    return true;
  };

  const validateAgreeTerms = () => {
    if (!state.agreeChecked) {
      setState({
        ...state,
        agreeTermsError: "Please accept the terms and conditions."
      });
      return false;
    }
    return true;
  };

  const postRequestToBackend = () => {
    let requestBody = JSON.stringify({
      name: state.name,
      email: state.email,
      emailChecked: false,
      password: state.password,
      phone: state.phone,
      issues: state.issues,
      languages: state.languages,
      comment: state.comment,
      agreeChecked: false
    });
    console.log("Fetching " + requestBody);
    // fetch to send the registration form back to backend as jason/
    fetch("http://localhost:8000/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody
    }).then(resp => {
      console.log("Response: ");
      console.log(resp);
    });
  };

  const handleSubmit = e => {
    const isValid = validateForm();

    if (!isValid) {
      //to discard default behaviors onSubmit event den svinei ta stoixeia tis formas kathe fora pou ta ipovallei o xristi
      e.preventDefault();
    } else {
      postRequestToBackend();
      //to clear the form
      setState(initialState);
      e.preventDefault();
    }
  };

  const handleEvent = e => {
    setState({
      ...state,
      ...initErrorState,
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
            <div style={errorTextStyle}>{state.nameError}</div>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleEvent}
            />
            <div style={errorTextStyle}>{state.emailError}</div>
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
            <div style={errorTextStyle}>{state.phoneError}</div>
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
            <div style={errorTextStyle}>{state.passwordError}</div>
          </div>
          <div>
            <label htmlFor="issues">Issues* </label>
            <DropdownList onChange={handleIssueDropdown} />
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
            <div style={errorTextStyle}>{state.languagesError}</div>
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
            <div style={errorTextStyle}>{state.commentError}</div>
          </div>
          <CheckBoxBase
            textValue="I agree to the terms and conditions."
            required
            onChange={handleAgreeCheckbox}
          />
          <div style={errorTextStyle}>{state.agreeTermsError}</div>
          <div className="submitButton">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
