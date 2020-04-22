// Styles
import "./styles/App.scss";
// Components
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
//import Navbar from "./components/Layout/Navbar";
import Info from "./components/Pages/Info";
import RegistrationForm from "./components/Registration/RegistrationForm";
import LogIn from "./components/LogInForm/LogIn";
import Topic from "./components/Pages/Topic";
import Association from "./components/Pages/Association";
import Dashboard from "./components/ChatApp/Dashboard";



function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">{/*  <Navbar />*/}</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/topic" component={Topic} />
          <Route exact path="/association" component={Association} />
          <Route exact path="/chat" component={Dashboard} />       
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
