import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './screen/Layout'; // Adjust as per your usage
import Home from './screen/HomePage'; // Replace with your actual import
import Dashboard from './screen/dashboard'; // Replace with your actual import
import ProtectedRoute from './screen/ProtectedRoute'; // Import the ProtectedRoute component
import ImageGallery from './screen/testdisplay';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<ImageGallery />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
