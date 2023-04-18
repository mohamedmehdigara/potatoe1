import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Home';
import Download from './Download';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={ <Home />} ></Route>
        <Route path="/download" exact element={ <Download />} ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  
);

reportWebVitals();