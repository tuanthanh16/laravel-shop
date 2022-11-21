import { useContext } from "react";
import CartContext from "../CartContext";
import CartSummaryItem from "./CartSummaryItem";

const CartSummary = () => {
    const { cart } = useContext(CartContext);
    const totalCost = cart.reduce(
        (prev, item) => prev + Number(item.qty) * Number(item.price),
        0
    );
    return (
        <>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                {/* <span className="badge badge-secondary badge-pill">3</span> */}
            </h4>

            <ul className="list-group mb-3 z-depth-1">
                {cart.map((item, index) => (
                    <CartSummaryItem
                        key={index}
                        name={item.name}
                        quantity={item.qty}
                        price={item.price}
                    />
                ))}

                <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${totalCost.toFixed(2)}</strong>
                </li>
            </ul>

            <form className="card p-2">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Promo code"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-secondary btn-md waves-effect m-0"
                            type="button"
                        >
                            Redeem
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CartSummary;
