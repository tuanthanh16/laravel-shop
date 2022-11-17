
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/app.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home.jsx";
import CartContext from "./CartContext";
import { useState } from "react";


export default function App() {

    const [cart, setCart] = useState([])

    return (
        <>
            <CartContext.Provider value={{ cart, setCart }}>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                    </Routes>
                    <Footer />
                </div>
            </CartContext.Provider>
        </>
    );
}

