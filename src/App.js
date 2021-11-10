import React from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h1>FIRST REACT LAB</h1>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="contactus">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <Routes>
              <Route exact path='/' Component='{LoginPage}'></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
