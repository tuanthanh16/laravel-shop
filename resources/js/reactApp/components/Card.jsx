import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "./CartContext";


const Card = ({ product }) => {

    const { cart, setCart } = useContext(CartContext)


    // add products to cart

    const addToCart = () => {
        setCart([
            ...cart,
            [
                `${product.name}`,
                `${product.img}`,
                `${product.description}`,
                `${product.price}`,
                `${product.stock}`,
            ],
        ])
    }





    // increment and decrement button for quanity

    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(Number(product.price))

    const increment = () => {
        setAmount(Math.min(1000, amount + 1))
        //setPrice(Math.min(Number(product.price) * 1000, Number(product.price) + price))
        // props.parentCallback(price)

        //###REDUCER    dispatch({ type: "increment" })

    }

    const decrement = () => {
        setAmount(Math.max(0, amount - 1))
        setPrice(Math.max(0, price - Number(product.price)))
        //###REDUCER    dispatch({ type: "decrement" })
    }



    return (

        < div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" >
            <div className="card h-100 shadow rounded">
                {/* <div class="thumbnail" style={{ backgroundImage: `url(${product.img})` }}></div> */}
                <img src={product.img} alt="" className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{product.name}</h5>
                        <span className="fw-bolder">Total price: {product.price}</span>
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
                            addToCart()
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Card




