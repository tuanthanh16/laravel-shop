import { useRef, useState, useContext } from "react";
import CartContext from "../CartContext";
import "./CartItem.css";

const CartItem = ({ id, img, name, quantity, price }) => {
    const quantityRef = useRef();
    const [totalPrice, setTotalPrice] = useState(
        Number(quantity) * Number(price)
    );
    const { cart, setCart } = useContext(CartContext);

    //---code -----
    const handleMinus = (e) => {
        e.preventDefault();
        if (Number(quantityRef.current.value) > 1) {
            quantityRef.current.value -= 1;
            const currentItemIndex = cart.findIndex((item) => item.id == id);
            const updateCart = [...cart];
            updateCart[currentItemIndex].qty -= 1;
            setCart(updateCart);
            setTotalPrice(Number(quantityRef.current.value) * Number(price));
        }
    };
    const handlePlus = (e) => {
        e.preventDefault();
        quantityRef.current.value = Number(quantityRef.current.value) + 1;
        const currentItemIndex = cart.findIndex((item) => item.id == id);
        const updateCart = [...cart];
        updateCart[currentItemIndex].qty += 1;
        setCart(updateCart);
        //update display total price
        setTotalPrice(Number(quantityRef.current.value) * Number(price));
    };

    const handleRemove = () => {
        const updateCart = cart.filter((item) => item.id != id);
        setCart(updateCart);
    };
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                    src={
                        window.location.origin +
                        "/product_images/" +
                        img +
                        ".png"
                    }
                    className="img-fluid rounded-3"
                    alt=""
                />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-muted">Product</h6>
                <h6 className="text-black mb-0">{name}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2" onClick={handleMinus}>
                    <i className="fas fa-minus"></i>
                </button>

                <input
                    min="0"
                    name="quantity"
                    defaultValue={quantity}
                    type="number"
                    ref={quantityRef}
                    className="form-control form-control-sm"
                />

                <button className="btn btn-link px-2" onClick={handlePlus}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">{Number(totalPrice).toFixed(2)} Kč</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <i
                    className="fas fa-times remove-item"
                    onClick={handleRemove}
                ></i>
            </div>
        </div>
    );
};

export default CartItem;
