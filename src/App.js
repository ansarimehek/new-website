import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Product from './components/product';


// const App = () => (
//   return (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/product" element={<Product />} />
//     </Routes>
//   </Router>
// );
// )

function App() {

  return (
    <>

      <Home />
      <About />
      <Product />
    </>
  );
}

export default App;
