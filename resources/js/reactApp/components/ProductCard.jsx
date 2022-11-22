import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "./CartContext";
import ProductDetail from "../components/ProductDetail";



const ProductCard = ({ product }) => {

    const [showProduct, setShowProduct] = useState(false)

    // add products to cart

    const { cart, setCart } = useContext(CartContext);

    const addToCart = (productId, amount) => {
        const newCart = [...cart];
        let alreadyInCart = false;
        newCart.forEach((product) => {
            // console.log(product.id);
            // console.log(productId);
            if (product.id == productId) {
                alreadyInCart = true;
                product.qty += amount;
            }
        });
        if (!alreadyInCart) {
            newCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                stock: product.stock,
                qty: amount,
            });
        }
        setCart(newCart);
        setAmount(1);
    };

    // increment and decrement button for quanity

    const [amount, setAmount] = useState(1);
    //const [price, setPrice] = useState(Number(product.price))

    const increment = () => {
        setAmount(Math.min(1000, amount + 1));
        //setPrice(Math.min(Number(product.price) * 1000, Number(product.price) + price))
        // props.parentCallback(price)

        //###REDUCER    dispatch({ type: "increment" })
    };

    const decrement = () => {
        setAmount(Math.max(0, amount - 1));
        // setPrice(Math.max(0, price - Number(product.price)))
        //###REDUCER    dispatch({ type: "decrement" })
    };
    // console.log(cart);

    // function to get product detail
    const toggleShowProduct = () => {
        setShowProduct(true);
    }

    return (

        < div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" >
            {showProduct && <ProductDetail productId={product.id} />
            }
            <div className="card h-100 shadow rounded">
                <div
                    onClick={toggleShowProduct}
                    class="thumbnail"
                    style={{
                        backgroundImage: `url(${"/product_images/" + product.image + ".png"
                            })`,
                    }}
                ></div>
                {/* <img src={"/product_images/" + product.image + ".png"} alt="" className="card-img-top " /> */}
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{product.name}</h5>
                        <span className="fw-bolder">
                            Price: {product.price}
                        </span>
                        {/* <span className="fw-bolder">In stock: {product.stock}</span> */}
                    </div>
                    <div className="">
                        <p className="card-text">{product.description}</p>
                    </div>
                    <Button
                        onClick={() => {
                            increment();
                        }}
                    >
                        +
                    </Button>
                    <span className="fs-3">{amount}</span>
                    <Button
                        onClick={() => {
                            decrement();
                        }}
                    >
                        -
                    </Button>
                </div>
                <div className="d-flex  justify-content-end mt-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <button
                            className="btn btn-sm btn-outline-success"
                            onClick={() => {
                                addToCart(product.id, amount);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard




