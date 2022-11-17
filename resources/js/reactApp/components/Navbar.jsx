import React, { useContext, useState } from "react";
import axios from "axios";
import Cart from "./Cart";
import "./Navbar.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import UserContext from "./user/UserContext";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const { user, setUser } = useContext(UserContext);
    // ------ code --------
    const logout = async () => {
        try {
            const res = await axios.post("/logout");
            setUser(null);
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div className="Navbar">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-2">LOGO</div>
                    <div className="col-9 col-md-3">
                        <Search />
                    </div>
                    <div className="col-3 d-md-none">
                        <button onClick={() => setShowLinks(!showLinks)}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                    <div
                        className={`col-12 col-md-7 links d-md-block ${
                            showLinks ? "" : "d-none"
                        }`}
                    >
                        <div className="row d-flex align-items-center">
                            <a className="col-12 col-md-2" href="/">
                                Home
                            </a>
                            <Link className="col-12 col-md-2" to="/register">
                                Register
                            </Link>
                            {!user && (
                                <Link className="col-12 col-md-2" to="/login">
                                    Login
                                </Link>
                            )}
                            {user && (
                                <button
                                    className="btn-logout col-12 col-md-2"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            )}
                            <a className="col-12 col-md-2" href="/contacts">
                                Contacts
                            </a>

                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
