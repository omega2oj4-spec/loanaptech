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
import Faq from './components/Faq';
import Terms from './components/Terms';
import Dashboard from './Pages/Dashboard';
import ApplyLoan from './components/ApplyLoan';
import LoanDetails from './Pages/LoanDetails';

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
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply" element={<ApplyLoan />} />
           <Route path="/loans/:id" element={<LoanDetails />} />
          <Route path="*" element={<About />} />
         

        </Routes>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App