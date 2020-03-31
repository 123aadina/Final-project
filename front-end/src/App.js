// Styles
import "./styles/App.scss";

// Components
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
// import Navbar from "./components/Layout/Navbar";
import Info from "./components/Pages/Info";
import RegistrationForm from "./components/Registration/RegistrationForm";
import Topic from "./components/Pages/Topic";
<<<<<<< HEAD
// import LogIn from "./components/LogInForm/LogIn";
=======
import LogIn from "./components/LogInForm/LogIn";
>>>>>>> 273c64a9eedb960785fa4872e0dc1fae8f811cde

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">{/* <Navbar /> */}</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/topic" component={Topic} />
<<<<<<< HEAD
          {/* <Route exact path="/login" component={LogIn} /> */}
=======
          <Route exact path="/login" component={LogIn} />
>>>>>>> 273c64a9eedb960785fa4872e0dc1fae8f811cde
        </Switch>
      </div>
    </Router>
  );
}

export default App;
