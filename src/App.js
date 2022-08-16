import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./Views/Grid/Grid";
import Customer from "./Views/Customer/Customer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Grid />} />
        <Route exact path="/Customer" element={<Customer />} />
      </Routes>
    </Router>
  );
}

export default App;
