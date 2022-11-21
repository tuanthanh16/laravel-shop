import { useContext, useRef, useState } from "react";
import CartContext from "../CartContext";
import CartSummaryItem from "./CartSummaryItem";
import axios from "axios";

const CartSummary = () => {
    const { cart } = useContext(CartContext);
    const [discountProducts, setDiscountProducts] = useState([]);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [discountObj, setDiscountObj] = useState(null);
    // const [hasDiscount, setHasDiscount] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const totalCost = cart.reduce(
        (prev, item) => prev + Number(item.qty) * Number(item.price),
        0
    );
    const redeemRef = useRef();
    // --- code ----
    const handleRedeem = async () => {
        const coupon = redeemRef.current.value;
        //reset field
        redeemRef.current.value = "";
        // find products are discounted
        const response = await axios.get("/api/redeem/" + coupon);
        // console.log(response.data);
        if (response.data) {
            const newCoupons = [...coupons];
            //check if exist
            if (newCoupons.includes(coupon)) {
                console.log("Coupon exists");
            } else {
                // is new cp
                newCoupons.push(coupon);
                setCoupons(newCoupons);
            }
            // console.log(response.data[0].percentage);
            const discountPct = response.data[0].percentage;
            setDiscountObj(response.data[0].percentage);
            setDiscountProducts(response.data[1]);

            let totalDiscount = 0;
            cart.forEach((item) => {
                const found = response.data[1].filter(
                    (product) => product.id == item.id
                );
                if (found.length > 0) {
                    // console.log(found);
                    // calculate discount amount and update

                    totalDiscount +=
                        item.qty * item.price * (Number(discountPct) / 100);

                    setDiscountAmount(totalDiscount);
                }
            });
        } else {
            console.log("Coupon invalid");
        }
    };

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

                {/* <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                </li> */}
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${totalCost.toFixed(2)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Discount (USD)</span>
                    <strong>${discountAmount.toFixed(2)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total after discount (USD)</span>
                    <strong>
                        ${Number(totalCost - discountAmount).toFixed(2)}
                    </strong>
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
                        ref={redeemRef}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-secondary btn-md waves-effect m-0"
                            type="button"
                            onClick={handleRedeem}
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
