import CartSummary from "./CartSummary";
import UserForm from "./UserForm";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate("/");
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <section
                className="h-75 overflow-auto py-4"
                style={{ backgroundColor: "#eee" }}
            >
                <div className="container">
                    <h2 className="mb-4 h2 text-center">Checkout form</h2>

                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <UserForm onShow={handleShow} />
                        </div>
                        <div className="col-md-4 mb-4">
                            <CartSummary />
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order had been placed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for supporting our small business!
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

export default Checkout;
