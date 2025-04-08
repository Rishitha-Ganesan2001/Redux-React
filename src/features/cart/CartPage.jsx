import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty, clearCart} from './cartSlice';

const CartPage =()=>{
    const dispatch = useDispatch();
    const {cartItems=[], totalQuantity=0} = useSelector((state) =>state.cart || {});
    
    const total =cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if(!cartItems.length) return <p className="font-semibold text-center mt-3">🛒Your cart is empty!!</p>
   
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b py-2">
                    <img src={item.image} alt={item.title} className="h-16"/>
                    <div className="flex-1">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    <div className="flex items-center gap-2">
                        <button onClick={() => dispatch(decreaseQty(item.id))}> ➖ </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQty(item.id))}> ➕ </button>
                    </div>
                    </div>
                    <button className="font-bold" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
            ))}
            <div className="text-right font-bold">
                <p>Total Items: {totalQuantity}</p>
                <p>Total Price: ${total.toFixed(2)}</p>
                <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 active:scale-95 transition duration-150 ease-in-out" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
        </div>
    )
}

export default CartPage;