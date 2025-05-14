import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Category from "./Components/Category";
import Newcollections from "./Components/Newcollections";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Accecory from "./Components/Accecory";
import Footwear from "./Components/Footwear";
import Mobiles from "./Components/Mobiles";
import Toys from "./Components/Toys";
import Beauty from "./Components/Beauty";
import Homedecor from "./Components/Homedecor";

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
          <Route path="/categories/men" element={<Men />}></Route>
          <Route path="/categories/women" element={<Women />}></Route>
          <Route path="/categories/accecory" element={<Accecory />}></Route>
          <Route path="/categories/footwear" element={<Footwear />}></Route>
          <Route path="/categories/mobiles" element={<Mobiles />}></Route>
          <Route path="/categories/toys" element={<Toys />}></Route>
          <Route path="/categories/beauty" element={<Beauty />}></Route>
          <Route path="/categories/homedecor" element={<Homedecor />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
