
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../css/app.css";
import "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import CarouselContainer from "./Carousel";
import Home from "../Pages/Home.jsx";
import CartContext from "./CartContext";
import { useState } from "react";


function App() {
const [cart, setCart] = useState([])

  const location = useLocation();

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <Navbar />
          <CarouselContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
          {location.pathname !== '/contact-us' && <Footer />}
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;


