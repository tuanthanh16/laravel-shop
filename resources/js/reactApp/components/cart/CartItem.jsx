const CartItem = ({ img, name, quantity, price }) => {
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid rounded-3"
                    alt=""
                />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-muted">Product</h6>
                <h6 className="text-black mb-0">{name}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button
                    className="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                >
                    <i className="fas fa-minus"></i>
                </button>

                <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value={quantity}
                    type="number"
                    className="form-control form-control-sm"
                />

                <button
                    className="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">{price}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-muted">
                    <i className="fas fa-times"></i>
                </a>
            </div>
        </div>
    );
};

export default CartItem;
