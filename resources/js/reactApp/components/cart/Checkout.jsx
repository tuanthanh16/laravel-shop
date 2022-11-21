import CartSummary from "./CartSummary";
import UserForm from "./UserForm";

const Checkout = () => {
    return (
        <section
            className="h-75 overflow-auto py-4"
            style={{ backgroundColor: "#eee" }}
        >
            <div className="container">
                <h2 className="mb-4 h2 text-center">Checkout form</h2>

                <div className="row">
                    <div className="col-md-8 mb-4">
                        <UserForm />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CartSummary />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
