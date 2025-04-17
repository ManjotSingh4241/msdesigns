import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import ProductInformation from './pages/productInformation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<ProductInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
