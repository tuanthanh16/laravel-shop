import Card from '../components/Card';
import { useState, useEffect, useContext } from 'react';
import CartContext from '../components/CartContext';

const Home = () => {
    const { cart, setCart } = useContext(CartContext)

    // fetching data from API endpoint (products)
    const [productsData, setProductsData] = useState([])

    const loadProductsData = async () => {

        const response = await fetch('http://laravel-shop.test/api/list-products')

        const data = await response.json();

        console.log(data.data)
        setProductsData(data.data);
    }

    useEffect(() => {
        loadProductsData()
    }, [])

    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-5 text-uppercase'>Shop Page</h3>
            <div className="container py-4">
                <div className="row">

                    {
                        productsData ?
                            productsData.map((product, index) => {
                                return (
                                    <Card product={product} key={index} />
                                )
                            })
                            :
                            <p>LOADING</p>
                    }
                    {/*  */}

                </div>

                <div>
                    {cart.map((cartItem) => {
                        return (
                            <p>ID: {cartItem.id}, qty: {cartItem.qty}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
