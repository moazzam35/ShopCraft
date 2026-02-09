import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Load cart from localStorage on initial render
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('shopcraft-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [animationTrigger, setAnimationTrigger] = useState(null);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('shopcraft-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        // Trigger animation
        setAnimationTrigger(Date.now());
        console.log("Added to cart:", product);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === productId) {
                    const newQuantity = item.quantity + amount;
                    return { ...item, quantity: Math.max(1, newQuantity) };
                }
                return item;
            });
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, animationTrigger }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
