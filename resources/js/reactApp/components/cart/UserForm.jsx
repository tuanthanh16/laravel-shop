import { useContext, useRef } from "react";
import UserContext from "../user/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../user/actions/auth";
import CartContext from "../CartContext";

const UserForm = ({ onShow }) => {
    const { user, setUser } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    const saveRef = useRef();
    const nameRef = useRef();
    const surNameRef = useRef();
    const emailRef = useRef();
    let userId = 9999999999;
    const inputHtml =
        user[0].id != -100 ? (
            <input
                type="checkbox"
                className="form-check-input"
                ref={saveRef}
                disabled
            />
        ) : (
            <input type="checkbox" className="form-check-input" ref={saveRef} />
        );
    // ---- code -----
    const getUser = async () => {
        const logUser = await loadUser();
        if (logUser) {
            setUser(logUser);
            userId = logUser[0].id;
            // console.log(`user from function ${logUser[0].id} had logged in`);
            // console.log(`user from userContext ${user[0].id} had logged in`);
        } else {
            console.log("user not found");
        }
    };
    const handleCheckout = async (e) => {
        e.preventDefault();
        //check if user logged in
        if (user[0].id != -100) {
            userId = user[0].id;
            //user logged in -> save userId -> continue create order
        } else {
            // if saveRef = true -> validation name/surname/email -> save
            console.log("user not logged in: ", userId);
            if (saveRef.current.checked) {
                const regData = {
                    name: nameRef.current.value,
                    surname: surNameRef.current.value,
                    email: emailRef.current.value,
                    password: "password",
                    password_confirmation: "password",
                };
                const response = await axios.post("/register", regData);
                console.log(response);
                // get user login
                await getUser();
                console.log("new user created: ", userId);
            }
        }
        // create sale here with logged user or new user id or id = 9999999999
        // console.log(userId);
        const saleData = {
            customer_id: userId,
            status: 1,
        };
        // these lines of code are to create order in database
        // not working on server yet
        //--------------------------------------------------------
        const sale = await axios.post("/api/create-sale", saleData);
        const sale_id = sale.data.id;
        //create sale_details with sale_id and cart context
        cart.forEach((item) => {
            const detailData = {
                sale_id: sale_id,
                product_id: item.id,
                quantity: item.qty,
            };
            axios.post("/api/create-detail", detailData);
        });
        //---------------------------------------------------------
        // clear cart
        setCart([]);
        console.log("thank you");
        onShow();
    };
    return (
        <div className="card">
            <form className="card-body">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <div className="md-form ">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={user[0].name}
                                ref={nameRef}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 mb-2">
                        <div className="md-form">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={user[0].surname}
                                ref={surNameRef}
                            />
                        </div>
                    </div>
                </div>

                <div className="md-form mb-2">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="youremail@example.com"
                        defaultValue={user[0].email}
                        ref={emailRef}
                    />
                </div>

                <div className="md-form mb-2">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                        defaultValue={user[0].address}
                    />
                </div>

                <div className="md-form mb-2">
                    <label>Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="123 456 789"
                        defaultValue={user[0].phone}
                    />
                </div>

                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        defaultChecked
                    />
                    <label className="form-check-label">
                        Shipping address is the same as my billing address
                    </label>
                </div>
                <div className="form-check">
                    {inputHtml}
                    <label className="form-check-label">
                        Register this information for next time
                    </label>
                </div>

                <hr />

                <div className="d-block my-3">
                    <div className="form-check">
                        <input
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            defaultChecked
                        />
                        <label className="form-check-label">Credit card</label>
                    </div>
                    <div className="form-check">
                        <input
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                        />
                        <label className="form-check-label">Debit card</label>
                    </div>
                    <div className="form-check">
                        <input
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                        />
                        <label className="form-check-label">Paypal</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Name on card</label>
                        <input type="text" className="form-control" required />
                        <small className="text-muted">
                            Full name as displayed on card
                        </small>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Credit card number</label>
                        <input type="text" className="form-control" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-0">
                        <label>Expiration</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-3 mb-0">
                        <label>CVV</label>
                        <input type="text" className="form-control" required />
                    </div>
                </div>
                <hr />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                        onClick={handleCheckout}
                    >
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
