import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game"; // Assuming Game.js is located in the pages folder
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
