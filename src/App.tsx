import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chapter1 from './components/Chapter1';
import './App.css';



const App: React.FC = () => {
  return (
    <Router>
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        {/* Lägg till fler rutter efter behov */}
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
