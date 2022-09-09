import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/header/header.js";
import { Home } from "./components/home/home.js";
import { Subreddit } from "./components/subreddit/subreddit.js";


function App() {
  return (
    <div className="App">
      <Header />

    <div className = "main">
      <Home className= "home"/>

      <Subreddit className= "subreddit" />

    </div>

    </div>
  );
}

export default App;