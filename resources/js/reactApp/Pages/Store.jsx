import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import "../../../css/app.css";
import CartContext from '../components/CartContext';


const Store = () => {
    const { cart, setCart } = useContext(CartContext)

    // fetching data from API endpoint (products)
    const [productsData, setProductsData] = useState([])
    const [pageTitle, setpageTitle] = useState('')
    const { categoryId, keyword } = useParams()

    const loadProductsData = async () => {

        let url = ''

        if(categoryId) {
            url = '/api/products/' + categoryId
        } 
        else if (keyword)
            url = 'api/search-products/' + keyword
        else {
            url = '/api/list-products'
        }

        const response = await fetch(url)

        const data = await response.json();

        console.log(data.data)

        if (categoryId) {
            setProductsData(data.data[0]);
        } else {
            setProductsData(data.data);
        }

        
        if (categoryId) {
            setpageTitle(data.data[1].name);
        } else if (keyword) {
            setpageTitle('Search: ' + keyword)
        } else {
            setpageTitle('Store')
        }
    }
    
    useEffect(() => {
        
        loadProductsData()
    }, [])

    return (


        <>

            <div className='container-fluid'>
                <h3 className='text-center mt-5 text-uppercase'>{pageTitle}</h3>
                <div className="container py-4">
                    <div className="row">

                        {
                            productsData ?
                                productsData.map((product) => {
                                    return (
                                        <ProductCard product={product} key={product.id} />
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

        </>
    )
}

export default Store


