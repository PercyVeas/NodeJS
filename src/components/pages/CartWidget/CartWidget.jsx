import "../CartWidget/CartWidget.css"
import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
    return(
        <div className="container-custom-icon">
            <FaCartShopping className="custom-icon"/>
            <span className="contCart">
                0
            </span>
        </div>
        
    );
};
