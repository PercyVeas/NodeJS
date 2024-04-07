import "../Navbar/Navbar.css"
import { CartWidget } from "../../pages/CartWidget/CartWidget" 

export const Navbar = () => {

    return (
        <div className ="Navbar">

        <div className="ContainerImagen">
            <img className="Logo" src="../assets/img/LOGO-FINAL" alt="Logo de la tienda" />
        </div>    
        
        <div className="ContainerList">
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Expediciones</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
        </div>

        <div>
            <CartWidget/>
        </div>
        
    </div>
    );
};
