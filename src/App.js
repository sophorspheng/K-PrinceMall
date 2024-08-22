import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./screen/Layout";
import Home from "./screen/HomePage";
import Login from "./screen/Login"; // Example of another page

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home renders here */}
          <Route path="login" element={<Login />} /> {/* Example Login route */}
        </Route>
      </Routes>
    </Router>
  );
}
