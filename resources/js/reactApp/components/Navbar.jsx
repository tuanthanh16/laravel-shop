import React, { useState } from 'react';
import Cart from './Cart';
import "../../../css/Navbar.css";
import { Container } from 'react-bootstrap';
import logo from "../../images/background-imgs/balkan.png";
import Search from './Search';

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    return (

        <div className='Navbar'>
            <div className='container'>

                <div className='row d-flex align-items-center'>
                    <div className="col-md-2">
                        <img src={logo} alt="logo" className='logo-navbar' />
                    </div>
                    <div className="col-9 col-md-3">
                        <Search />
                    </div>
                    <div className="col-3 d-md-none">
                        <button onClick={() => setShowLinks(!showLinks)}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                    <div className={`col-12 col-md-7 links d-md-block ${showLinks ? "" : "d-none"}`} >
                        <div className="row d-flex align-items-center">
                            <a className='col-12 col-md-2' href='/'>Home</a>
                            <a className='col-12 col-md-2' href='/register'>Register</a>
                            <a className='col-12 col-md-2' href='/login'>Login</a>
                            <a className='col-12 col-md-2' href='/contacts'>Contacts</a>

                            <Cart />
                        </div>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar