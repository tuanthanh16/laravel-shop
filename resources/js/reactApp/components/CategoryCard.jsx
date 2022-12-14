import { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const CategoryCard = ({ category }) => {

    const [detail, setDetail] = useState([])

    return (
        < div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4" >
           
            <div className="card h-100 shadow rounded">

                <Link to={"/store/" + category.id}>
                    <div 
                    className="thumbnail-category"
                    style={{ backgroundImage: `url(${"/category_images/" + category.image + ".png"})` }}></div>
                    {console.log(category.image)}
                </Link>



                <div className="card-body">
                    <div className="d-flex justify-content-center">

                        <Link to={"/store/" + category.id}>
                            <h5 className="card-title">
                                {category.name}
                            </h5>
                        </Link>
                    </div>

                    <div className="d-flex  justify-content-end mt-4">
                        <div className="d-flex align-items-center justify-content-center">
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default CategoryCard