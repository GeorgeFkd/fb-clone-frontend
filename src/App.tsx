import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
//* later keep an eye on project size with react icons
import MarketPlace from "./pages/MarketPlace";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="app__container">
      {/* <hr /> */}
      <Switch>
        <Route path="/marketplace">
          <Navbar />
          <MarketPlace />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/">
          <Navbar />
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
