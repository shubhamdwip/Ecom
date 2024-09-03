// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const getCartCount = () => cartItems.length;
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
