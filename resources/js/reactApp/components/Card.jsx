import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "./CartContext";


const Card = ({ product }) => {




    // add products to cart

    const { cart, setCart } = useContext(CartContext)

    const addToCart = (productId) => {
        const newCart = [...cart]
        let alreadyInCart = false
        newCart.forEach((product) => {
            console.log(product.id);
            console.log(productId);
            if (product.id == productId) {
                alreadyInCart = true
                product.qty++
            }
        })
        if (!alreadyInCart) {
            newCart.push({
                id: product.id,
                qty: 1,
            })
        }
        setCart(newCart)
    }





    // increment and decrement button for quanity

    const [amount, setAmount] = useState(1)
    //const [price, setPrice] = useState(Number(product.price))

    const increment = () => {
        setAmount(Math.min(1000, amount + 1))
        //setPrice(Math.min(Number(product.price) * 1000, Number(product.price) + price))
        // props.parentCallback(price)

        //###REDUCER    dispatch({ type: "increment" })

    }

    const decrement = () => {
        setAmount(Math.max(0, amount - 1))
        // setPrice(Math.max(0, price - Number(product.price)))
        //###REDUCER    dispatch({ type: "decrement" })
    }

    console.log(cart)

    return (
        < div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" >
            <div className="card h-100 shadow rounded">
                {/* <div class="thumbnail" style={{ backgroundImage: `url(${product.img})` }}></div> */}
                <img src={product.img} alt="" className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{product.name}</h5>
                        <span className="fw-bolder">Price: {product.price}</span>
                        <span className="fw-bolder">In stock: {product.stock}</span>
                    </div>
                    <div className="">
                        <p className="card-text">{product.description}</p>
                    </div>
                    <Button onClick={() => {
                        increment()
                    }}>+</Button>
                    <span className="fs-3">{amount}</span>
                    <Button onClick={() => {
                        decrement()
                    }}>-</Button>
                </div>
                <div className="d-flex  justify-content-end mt-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-sm btn-outline-success" onClick={() => {
                            addToCart(product.id)
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card




