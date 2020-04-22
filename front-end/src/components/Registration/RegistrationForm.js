import React, { useState } from "react";
import CheckBoxBase from "./Checkboxes";
import DropdownList from "./DropdownList";
import BallonBox from "./BallonBox";

// Components
import Navbar from "../Layout/Navbar";
import Footer from "../../components/Layout/Footer";

// Styling
import "../../styles/App.scss";

const initErrorState = {
  nameError: "",
  emailError: "",
  passwordError: "",
  phoneError: "",
  languagesError: "",
  commentError: "",
  agreeTermsError: "",
  formSubmitError: "",
};

const initialState = {
  name: "",
  email: "",
  // emailChecked: false,
  password: "",
  issues: 0,
  phone: "",
  languages: "",
  comment: "",
  agreeChecked: false,
  chatBoxChecked: false,
  ...initErrorState,
};

const errorTextStyle = {
  color: "red",
  fontSize: "12px",
};

const RegistrationForm = (props) => {
  const [state, setState] = useState(initialState);

  const handleAgreeCheckbox = (e) => {
    console.log("Agree checkbox " + e.target.checked);
    setState({
      ...state,
      agreeChecked: e.target.checked,
    });
  };

  // const handleEmailCheckbox = (e) => {
  //   setState({
  //     ...state,
  //     emailChecked: e.target.checked,
  //   });
  // };

  const handleChatCheckbox = (e) => {
    setState({
      ...state,
      chatBoxChecked: e.target.checked,
    });
  };

  //to change the state of the dropdown menu on the form
  const handleIssueDropdown = (e) => {
    setState({
      ...state,
      issues: e.target.selectedIndex,
    });
  };

  //form validators
  const validateForm = () => {
    setState({
      ...state,
      ...initErrorState,
    });

    if (
      state.name.length < 2 ||
      (state.name.length > 70 && state.name === "")
    ) {
      setState({
        ...state,
        nameError: "Name should be more than 2 characters long",
      });
      return false;
    }
    if (
      !state.email.includes("@") ||
      state.email === ""
      //this has to go for now since we are not going to use the email tickBox for now
      // ( && !state.emailChecked === true)
    ) {
      setState({
        ...state,
        emailError: "Please provide a valid email",
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
          "Password must contain at least 8 characters, an uppercase,and a special character ",
      });
      return false;
    }

    const reg = new RegExp("^([+]{0,1})([0-9]+)");
    if (!state.phone.match(reg) || state.phone.length > 14) {
      setState({
        ...state,
        phoneError: "Please fill in a correct phone number",
      });
      return false;
    }

    if (state.languages.length > 30) {
      setState({
        ...state,
        languagesError: "Please choose a language",
      });
      return false;
    }

    if (state.comment.length > 100) {
      setState({
        ...state,
        commentError:
          "You can fill in some information to let us know how can we help you",
      });
      return false;
    }

    if (!state.agreeChecked) {
      setState({
        ...state,
        agreeTermsError: "Please accept the terms and conditions.",
      });
      return false;
    }

    return true;
  };

  const postRequestToBackend = (e) => {
    let requestBody = JSON.stringify({
      name: state.name,
      email: state.email,
      // emailChecked: state.emailChecked,
      password: state.password,
      phone: state.phone,
      issues: state.issues,
      languages: state.languages,
      comment: state.comment,
      agreeChecked: state.agreeChecked,
      chatBoxChecked: state.chatBoxChecked,
    });
    console.log(requestBody);
    // fetch to send the registration form back to backend as jason/
    fetch("http://localhost:3000/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    }).then((resp) => {
      if (resp.status !== 200) {
        setState({ ...state, formSubmitError: "Registration not succeeded." });
        return;
      }
      console.log("Success");
      //to clear the form
      setState(initialState);

      //redirecting to chat page if chatBoxChecked is clicked
      if (state.chatBoxChecked === true) {
        //TODO00000 This has to change to chat page
        return props.history.push("/chat");
      } else {
        props.history.push("/");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      //to discard default behaviors onSubmit event den svinei ta stoixeia tis formas kathe fora pou ta ipovallei o xristi
      e.preventDefault();
    } else {
      postRequestToBackend(e);
    }
  };

  const handleEvent = (e) => {
    setState({
      ...state,
      ...initErrorState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-wrap col ">
      <Navbar className="navbar navbar-expand-xs col justify-content-center " />
      <h1 className=" text-center"> Registration Form </h1>
      <div className="row bg bg-light p-3">
        {/* Form start here */}
        <form noValidate onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="form-group col">
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
          <div className="form-group col">
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

            {/* <div className="form-check mt-1">
              <CheckBoxBase
                textValue=" I don't have an email"
                currentValue={state.emailChecked}
                onChange={handleEmailCheckbox}
              /> */}
          </div>

          {/* PASSWORD */}
          <div className="form-group col">
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
          <div className="form-group col">
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

          {/* ISSUES */}
          <div className="form-group col ">
            <label htmlFor="issues" className="font-weight-bolder">
              {" "}
              Issues *{" "}
            </label>

            <DropdownList
              currentValue={state.issues}
              onChange={handleIssueDropdown}
            />
          </div>
          {/* LANGUAGES */}
          <div className="form-group col">
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
          <div className="form-group mt-2 col">
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
          {/*CHECKBOX FOR THE CHAT*/}
          <div className="form-check checkbox_chat">
            <CheckBoxBase
              className="form-check-label"
              textValue="Chat with us"
              currentValue={state.chatBoxChecked}
              onChange={handleChatCheckbox}
            />
          </div>
          {/* CHECKBOX CONDITIONS AND TERMS */}
          <div className="form-check checkbox_terms text-center">
            <CheckBoxBase
              className="form-check-label"
              textValue=" I agree to the terms and conditions."
              currentValue={state.agreeChecked}
              onChange={handleAgreeCheckbox}
            />
          </div>
          <div style={errorTextStyle}>{state.formSubmitError}</div>
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
      <BallonBox title="Sign in and chat with us!" />
      <Footer />
    </div>
  );
};

export default RegistrationForm;
