import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../CartContext";

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const totalItems = cart.reduce((prev, item) => prev + item.qty, 0);
    // console.log(totalItems);
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/cart");
    };
    return (
        <div className="m-3" style={{ cursor: "pointer" }}>
            <i
                class="fas fa-shopping-cart"
                style={{ color: "black" }}
                onClick={handleClick}
            >
                <span class="badge rounded-pill badge-notification bg-danger">
                    {totalItems}
                </span>
            </i>
        </div>
    );
};

export default CartIcon;
