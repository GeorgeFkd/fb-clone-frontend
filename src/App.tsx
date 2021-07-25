import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import {Switch,Route} from "react-router-dom"
//* later keep an eye on project size with react icons
import MarketPlace from './pages/MarketPlace';

function App() {
  return (
    <div className="app__container">
      <Navbar />
      {/* <hr /> */}
      <Switch>
      <Route path="/marketplace">
        <MarketPlace />
      </Route>
      <Route path="/">
                <HomePage />
      </Route>
      </Switch>

    </div>
  );
}

export default App;
