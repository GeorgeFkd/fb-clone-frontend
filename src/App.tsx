import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

//* later keep an eye on project size with react icons


function App() {
  return (
    <div className="app__container">
      <Navbar />
      <hr />
      <HomePage />
    </div>
  );
}

export default App;
