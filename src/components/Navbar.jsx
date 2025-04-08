import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const Navbar =()=> {
    const total = useSelector(state => state.cart.totalQuantity);

    return (
        <nav className=" sticky top-0 bg-white z-50 flex justify-between items-center p-4 shadow">
            <Link to="/" className="text-2xl font-bold">All Items</Link>
            <Link to="/cart" className="relative text-lg font-bold">
            🛒Cart{
                total > 0 && (
                    <span className="ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-sm">{total}</span>
                )
            }
            </Link>
           
        </nav>
    )

}
export default Navbar;