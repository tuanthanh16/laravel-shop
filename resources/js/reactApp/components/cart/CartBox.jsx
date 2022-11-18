import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartContext from "../CartContext";

const CartBox = () => {
    const { cart } = useContext(CartContext);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const updateCost = cart.reduce(
            (prev, item) => prev + Number(item.qty) * Number(item.price),
            0
        );
        setTotalCost(Number(updateCost).toFixed(2));
    }, [cart]);
    return (
        <section
            className="h-100 h-custom"
            style={{ backgroundColor: "#d2c9ff" }}
        >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div
                            className="card card-registration card-registration-2"
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </h1>
                                                <h6 className="mb-0 text-muted">
                                                    3 items
                                                </h6>
                                            </div>
                                            <hr className="my-4" />
                                            {cart &&
                                                cart.map((item, index) => (
                                                    <CartItem
                                                        key={index}
                                                        id={item.id}
                                                        name={item.name}
                                                        quantity={item.qty}
                                                        price={item.price}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </h3>
                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">
                                                    items {cart.length}
                                                </h5>
                                                <h5>€ {totalCost}</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">
                                                Give code
                                            </h5>

                                            <div className="mb-5">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label className="form-label">
                                                        Enter your code
                                                    </label>
                                                </div>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">
                                                    Total price
                                                </h5>
                                                <h5>€ 137.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-8 p-3">
                                        <h6 className="mb-0">
                                            <Link to="/" className="text-body">
                                                <i className="fas fa-long-arrow-alt-left me-2"></i>
                                                Back to shop
                                            </Link>
                                        </h6>
                                    </div>
                                    <div className="col-4 p-3">
                                        <button
                                            type="button"
                                            className="btn btn-dark btn-block btn-lg"
                                            data-mdb-ripple-color="dark"
                                        >
                                            Checkout
                                        </button>
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

export default CartBox;
