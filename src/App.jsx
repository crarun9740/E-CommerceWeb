import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Category from "./Components/Category";
import Newcollections from "./Components/Newcollections";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/categories" element={<Category />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newcollections" element={<Newcollections />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
