import "./styleForm.css";
import axios from "axios";
import { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        navigate("/");
    };
    const handleShow = () => setShow(true);

    const handleClick = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        const url = `/api/mail?name=${name}&email=${email}&content=${message}`;
        const response = await axios.get(url);
        console.log(response.data);
        //clear form
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        //show modal
        setShow(true);
        //redirect home
    };

    return (
        <>
            <section
                className="h-auto p-5"
                style={{
                    backgroundImage:
                        "'../../images/background-imgs/fresh-colourful-ingredients-mexican-cuisine.jpg'",
                }}
            >
                <div className="container h-75">
                    <div
                        className="card text-black m-auto"
                        style={{ borderRadius: "25px", width: "500px" }}
                    >
                        <div className="card-body p-md-2">
                            <form>
                                <h3>Contact us</h3>
                                <div className="mb-3">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        ref={nameRef}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        ref={emailRef}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Message:</label>
                                    <textarea
                                        id="message"
                                        placeholder="Your message"
                                        rows="6"
                                        ref={messageRef}
                                    ></textarea>
                                </div>

                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={handleClick}
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your message had been sent, thank you for your feedback!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactUs;
