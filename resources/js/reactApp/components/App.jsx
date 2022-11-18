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
import Home from "../Pages/Home.jsx";
import CartContext from "./CartContext";
import UserContext from "./user/UserContext";
import { useEffect, useState } from "react";
import LoginForm from "./user/LoginForm";
import Register from "./user/Register";
import { loadUser } from "./user/actions/auth";
import CartBox from "./cart/CartBox";

export default function App() {
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const guestUser = [{ id: -100, name: "Guest" }, { token: null }];
    const [user, setUser] = useState(guestUser);
    const getUser = async () => {
        const logUser = await loadUser();
        if (logUser) {
            setUser(logUser);
            console.log(`user ${logUser} had logged in`);
        } else {
            console.log("user not found");
        }
    };
    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <CartContext.Provider value={{ cart, setCart }}>
                    <div className="App">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            <Route path="/login" element={<LoginForm />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/cart" element={<CartBox />} />
                        </Routes>
                        {location.pathname !== "/contact-us" && <Footer />}
                    </div>
                </CartContext.Provider>
            </UserContext.Provider>
        </>
    );
}
