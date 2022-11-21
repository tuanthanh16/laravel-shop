import { Link } from "react-router-dom";



const CategoryCard = ({ category }) => {




    return (
        < div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mb-4" >
            <div className="card h-100 shadow rounded">

                <Link to={"/store/" + category.id}>
                    <div className="thumbnail" style={{ backgroundImage: `url(${"/product_images/" + category.image + ".png"})` }}></div>
                </Link>

                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        
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