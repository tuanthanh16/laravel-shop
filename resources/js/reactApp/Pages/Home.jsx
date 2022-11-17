import Card from '../components/Card';
import { useState, useEffect } from 'react';


const Home = () => {


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
            </div>
        </div>
    )
}

export default Home
