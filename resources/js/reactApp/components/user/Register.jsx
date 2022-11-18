import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const nameRef = useRef();
    const surNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const reTypePasswordRef = useRef();
    const navigate = useNavigate();
    // ---- code ----
    const handleClick = async (e) => {
        e.preventDefault();
        const regData = {
            name: nameRef.current.value,
            surname: surNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: reTypePasswordRef.current.value,
        };

        // console.log(regData);
        const response = await axios.post("/register", regData);
        console.log(response);
        //redirect
        navigate("/");
    };
    return (
        <section className="h-auto p-5" style={{ backgroundColor: "#eee" }}>
            <div className="container h-75">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div
                            className="card text-black"
                            style={{ borderRadius: "25px" }}
                        >
                            <div className="card-body p-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                                            Sign up
                                        </p>

                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        ref={nameRef}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        ref={surNameRef}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        ref={emailRef}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        ref={passwordRef}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">
                                                        Repeat your password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        ref={reTypePasswordRef}
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                />
                                                <label className="form-check-label">
                                                    I agree all statements in{" "}
                                                    <a href="#!">
                                                        Terms of service
                                                    </a>
                                                </label>
                                            </div> */}

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg"
                                                    onClick={handleClick}
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            class="img-fluid"
                                            alt="Sample image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
