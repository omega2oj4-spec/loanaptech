import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Added Route import

import './App.css'
import About from './components/About'
import Privacy from './components/Privacy' 
import Footer from './components/Footer' 
import Contact from './components/Contact'
import Signup from './Pages/Signup'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
       <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<About />} />
        </Routes>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App