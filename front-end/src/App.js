import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
// import RegistrationProvider from "../context/Registration/RegistrationState";
// import { RegistrationProvider } from "../context/Registration/RegistrationState";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <RegistrationState>
    <div className="finalProject">
      <header className="Final Project Starts!"></header>
      <RegistrationForm />
    </div>
    // </RegistrationState>
  );
}

export default App;
