// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cart-page'>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Price: ₹{item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
