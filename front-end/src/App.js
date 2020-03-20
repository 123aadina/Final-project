// Styles
import "./styles/App.css";

// Components
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Navbar from "./components/Layout/Navbar";
import Info from "./components/Pages/Info";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header"></header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          />
          <Route exact path="/registration" component={RegistrationForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
