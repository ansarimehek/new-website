import React from 'react'; // Import React
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Uncommented this line
import Home from './components/home';
import About from './components/about';
import Product from './components/product';

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
