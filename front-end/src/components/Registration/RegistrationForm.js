import React, { useState } from "react";
import CheckBoxBase from "./Checkboxes";
import DropdownList from "./DropdownList";

import Footer from "../../components/Layout/Footer";
import "../../styles/App.scss";

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
    <div className="registration_container">
      <div className="registration_form ">
        <h1 className="m-3 border-bottom text-center"> Registration Form </h1>

        {/* Form start here */}
        <form noValidate onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="form-group">
            <label htmlFor="Name" className="font-weight-bolder">
              {" "}
              Name *
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={state.name}
              required
              onChange={handleEvent}
            />
            <div style={errorTextStyle}>{state.nameError}</div>
          </div>
          {/* EMAIL */}
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bolder">
              {" "}
              Email{" "}
            </label>
            <input
              className="form-control"
              autoComplete="off"
              type="email"
              name="email"
              value={state.email}
              onChange={handleEvent}
            />
            <div style={errorTextStyle}>{state.emailError}</div>

            <div className="form-check checkbox_mail mt-1">
              <CheckBoxBase
                className="form-check-label"
                textValue=" I don't have an email"
                onChange={handleEmailCheckbox}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bolder">
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
            <div style={errorTextStyle}>{state.passwordError}</div>
          </div>
          {/* PHONE NUMBER */}
          <div className="form-group">
            <label htmlFor="phone" className="font-weight-bolder">
              {" "}
              Phone{" "}
            </label>
            <input
              className="form-control"
              type="text"
              name="phone"
              value={state.phone}
              required
              onChange={handleEvent}
            />
            <div style={errorTextStyle}>{state.phoneError}</div>
          </div>

          <div>
            <label htmlFor="issues">Issues* </label>
            <DropdownList onChange={handleIssueDropdown} />
          </div>

          {/* ISSUES */}
          <div className="form-group ">
            <label htmlFor="issues" className="font-weight-bolder">
              {" "}
              Issues *{" "}
            </label>
            <DropdownList />
          </div>
          {/* LANGUAGES */}
          <div className="form-group">
            <label htmlFor="languages" className="font-weight-bolder">
              {" "}
              Languages *{" "}
            </label>
            <input
              className="form-control"
              type="text"
              name="languages"
              value={state.languages}
              placeholder="Which languages do you speak ?"
              onChange={handleEvent}
            />
            <div style={errorTextStyle}>{state.languagesError}</div>
          </div>

          {/* COMMENT */}
          <div className="form-group mt-2">
            <label htmlFor="comment" className="font-weight-bolder">
              {" "}
              Comment{" "}
            </label>
            <textarea
              className="form-control"
              type="text"
              name="comment"
              value={state.comment}
              placeholder="Explain your issues here..."
              onChange={handleEvent}
            />
            <div style={errorTextStyle}>{state.commentError}</div>
          </div>
          {/* CHECKBOX CONDITIONS AND TERMS */}
          <div className="form-check checkbox_terms m-2">
            <CheckBoxBase
              className="form-check-label"
              textValue=" I agree to the terms and conditions."
              onChange={handleAgreeCheckbox}
            />
          </div>
          {/* SUBMIT BUTTON */}
          <div style={errorTextStyle}>{state.agreeTermsError}</div>
          <div className="submitButton d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-success font-weight-bolder border-bottom my-auto "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
