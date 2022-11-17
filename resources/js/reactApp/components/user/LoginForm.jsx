import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import UserContext from "./UserContext";

const LoginForm = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    // ----code-----
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        // using custom login function
        const login = await axios.post("/api/login", loginData);
        console.log("login = ", login.data);
        //set user state
        setUser(login.data);
        //redirect to Home
        navigate("/");
    };
    const emailRef = useRef();
    const passwordRef = useRef();
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            ref={emailRef}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            ref={passwordRef}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
