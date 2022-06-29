import { getProduct } from "../../Utilities/AddTodb";
import data from "../data";
import Header from "../Shared/Header";

const Shipping = () => {
    const shippingData = Object.entries(getProduct())
    // const shippingId = shippingData[0][0];
    const orderData = data.find(d => d.id)
    console.log(orderData);
    return (
        <div>
            <Header></Header>
           
        </div>
    );
};

export default Shipping;