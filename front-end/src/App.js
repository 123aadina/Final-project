// Styles
import "./styles/App.scss";

// Components
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
//import Navbar from "./components/Layout/Navbar";
import Info from "./components/Pages/Info";
import RegistrationForm from "./components/Registration/RegistrationForm";
import LogIn from "./components/LogInForm/LogIn";
import Topic from "./components/Pages/Topic";
import Association from "./components/Pages/Association";
import Dashboard from "./components/ChatApp/Dashboard";
import Store from "./components/ChatApp/Store";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">{/*  <Navbar />*/}</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/topic" component={Topic} />
          <Route exact path="/association" component={Association} />
          <Store>
            {" "}
            <Route exact path="/chat" component={Dashboard} />
          </Store>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
