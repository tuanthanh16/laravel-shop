import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { useState, useEffect, useContext } from 'react';
import "../../../css/app.css";
import CartContext from "../components/CartContext";

const Home = () => {
    const { cart, setCart } = useContext(CartContext);


    //fetching data from API - endpoint(categories)

    const [categoriesData, setCategoriesData] = useState([])

    const loadCategoriesData = async () => {

        const response = await fetch('/api/list-categories')

        const data = await response.json();

        // console.log(data.data)
        setCategoriesData(data.data);
    }

    useEffect(() => {
        loadCategoriesData()
    }, [])

    return (

        <>
            <div className='container-fluid'>
                <h3 className='text-center mt-5 text-uppercase '>Home Page</h3>
                <div className="container py-4" >
                    <div className="row">

                        {
                            categoriesData ?
                                categoriesData.map((category) => {
                                    return (
                                        <CategoryCard category={category} key={category.id} />
                                    )
                                })
                                :
                                <p>LOADING</p>
                        }
                        {/*  */}

                    </div>


                </div>
            </div>


        </>
    )
}

export default Home;
