import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FillMatrix from './FillMatrix';
import Game from './game';
import "./App.css";

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<FillMatrix />} />
            <Route path="/game" element={<Game />} />
            </Routes>
        </Router>
      );
}

export default App;