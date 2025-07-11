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
import Info from "./Components/Info";
import Loginpage from "./Components/Loginpage";
import Signup from "./Components/Signup";
import Infomobiles from "./Components/InfoMobile";
import Infotoy from "./Components/Infotoy";
import Infofootwear from "./Components/Infofootwear";
import Infobeauty from "./Components/infobeauty";
import User from "./Components/User";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Success from "./Components/Success";
import Failed from "./Components/Failed";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { getCart } from "../actions/getCartItem";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getItems = async () => {
      const items = await getCart();

      console.log("app items");

      console.log(items);

      items.forEach((item) => {
        dispatch(addToCart(item));
      });
    };

    getItems();
  }, [dispatch]);

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
          <Route path="/categories/men/:id" element={<Info />}></Route>
          <Route path="/categories/women/:id" element={<Info />}></Route>
          <Route path="/categories/accecories/:id" element={<Info />}></Route>
          <Route path="/categories/:id" element={<Info />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route
            path="/categories/footwear/:id"
            element={<Infofootwear />}
          ></Route>
          <Route
            path="/categories/mobiles/:id"
            element={<Infomobiles />}
          ></Route>
          <Route path="/categories/beauty/:id" element={<Infobeauty />}></Route>
          <Route path="/categories/Toys/:id" element={<Infotoy />}></Route>
          <Route path="/categories/:id" element={<Info />}></Route>
          <Route path="/product/:id" element={<Info />}></Route>
          <Route path="/categories/homedecor/:id" element={<Info />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/failed" element={<Failed />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
