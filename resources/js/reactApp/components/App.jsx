import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/app.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home.jsx";
import CartContext from "./CartContext";
import { useEffect, useState } from "react";
import LoginForm from "./user/LoginForm";
import UserContext from "./user/UserContext";
import Register from "./user/Register";
import { loadUser } from "./user/actions/auth";

export default function App() {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const getUser = async () => {
        const user = await loadUser();
        if (user) {
            setUser(user);
            console.log(`user ${user} had logged in`);
        } else {
            console.log("No user had been logged");
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
                        </Routes>
                        <Footer />
                    </div>
                </CartContext.Provider>
            </UserContext.Provider>
        </>
    );
}
