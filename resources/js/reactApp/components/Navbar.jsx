import React, { useContext, useState } from "react";
import "../../../css/Navbar.css";
import { Container } from "react-bootstrap";
import logo from "../../images/background-imgs/balkan.png";
import Search from "./Search";
import axios from "axios";
import Cart from "./Cart";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import UserContext from "./user/UserContext";
import CartIcon from "./cart/CartIcon";

function Navbar({ keyword, setKeyword }) {
    const [showLinks, setShowLinks] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const guestUser = [{ id: -100, name: "Guest" }, { token: null }];
    // ------ code --------
    const logout = async () => {
        try {
            const res = await axios.post("/logout");
            setUser(guestUser);
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
                    <div className="col-md-2">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="logo"
                                className="logo-navbar"
                            />
                        </Link>
                    </div>
                    <div className="col-7 col-md-3">
                        <Search keyword={keyword} setKeyword={setKeyword} />
                    </div>
                    <div className="col-3 d-md-none">
                        <button onClick={() => setShowLinks(!showLinks)}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                    <div
                        className={`col-12 col-md-7 links d-md-block ${showLinks ? "" : "d-none"
                            }`}
                    >
                        <div className="row d-flex align-items-center">
                            {/* Left div */}
                            <div
                                className="d-flex
                                align-items-center
                                w-75"
                            >
                                <Link className="col-12 col-md-2" to="/">
                                    Home
                                </Link>
                                <Link className="col-12 col-md-2" to="/store">
                                    Store
                                </Link>
                                <Link
                                    className="col-12 col-md-2"
                                    to="/register"
                                >
                                    Register
                                </Link>
                                {user[0].id == -100 && (
                                    <Link
                                        className="col-12 col-md-2"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                )}
                                <a className="col-12 col-md-2" href="/contacts">
                                    Contacts
                                </a>
                            </div>
                            {/* Right box */}
                            <div class="d-flex align-items-center w-auto flex-grow-1">
                                <CartIcon />
                                {/* Avatar */}
                                <div class="dropdown">
                                    <div
                                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                            class="rounded-circle"
                                            height="25"
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                        <span className="ms-2">
                                            {user[0].name}
                                        </span>
                                    </div>
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a class="dropdown-item" href="#">
                                            My Profile
                                        </a>
                                        <a
                                            class="dropdown-item"
                                            onClick={logout}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Logout
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
