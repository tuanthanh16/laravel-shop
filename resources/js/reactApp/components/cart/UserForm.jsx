import { useContext } from "react";
import UserContext from "../user/UserContext";

const UserForm = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="card">
            <form className="card-body">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <div className="md-form ">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={user[0].name}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 mb-2">
                        <div className="md-form">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={user[0].surname}
                            />
                        </div>
                    </div>
                </div>

                <div className="md-form mb-2">
                    <label>Email (optional)</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="youremail@example.com"
                        defaultValue={user[0].email}
                    />
                </div>

                <div className="md-form mb-2">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                        defaultValue={user[0].address}
                    />
                </div>

                <div className="md-form mb-2">
                    <label>Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="123 456 789"
                        defaultValue={user[0].phone}
                    />
                </div>

                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked
                    />
                    <label className="form-check-label">
                        Shipping address is the same as my billing address
                    </label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">
                        Save this information for next time
                    </label>
                </div>

                <hr />

                <div className="d-block my-3">
                    <div className="form-check">
                        <input
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            checked
                        />
                        <label className="form-check-label">Credit card</label>
                    </div>
                    <div className="form-check">
                        <input
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                        />
                        <label className="form-check-label">Debit card</label>
                    </div>
                    <div className="form-check">
                        <input
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                        />
                        <label className="form-check-label">Paypal</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Name on card</label>
                        <input type="text" className="form-control" required />
                        <small className="text-muted">
                            Full name as displayed on card
                        </small>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Credit card number</label>
                        <input type="text" className="form-control" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-0">
                        <label>Expiration</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-3 mb-0">
                        <label>CVV</label>
                        <input type="text" className="form-control" required />
                    </div>
                </div>
                <hr />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary btn-block" type="submit">
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
