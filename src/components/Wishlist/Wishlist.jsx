import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import "./wishlist.css";

function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = (product, event) => {
        const button = event.currentTarget;
        const buttonRect = button.getBoundingClientRect();
        const cartIcon = document.querySelector('.cart-container');

        if (cartIcon) {
            const cartRect = cartIcon.getBoundingClientRect();
            const flyingItem = document.createElement('div');
            flyingItem.className = 'flying-item';
            flyingItem.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
            flyingItem.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
            document.body.appendChild(flyingItem);

            setTimeout(() => {
                flyingItem.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                flyingItem.style.left = `${cartRect.left + cartRect.width / 2}px`;
                flyingItem.style.top = `${cartRect.top + cartRect.height / 2}px`;
                flyingItem.style.transform = 'scale(0.3)';
                flyingItem.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                addToCart(product);
            }, 1500);

            setTimeout(() => {
                document.body.removeChild(flyingItem);
            }, 1600);
        } else {
            addToCart(product);
        }
    };

    const handleMoveToCart = (product, event) => {
        handleAddToCart(product, event);
        removeFromWishlist(product.id);
    };

    if (wishlist.length === 0) {
        return (
            <div className="wishlist-empty">
                <FaHeart className="empty-icon" />
                <h2>Your Wishlist is Empty</h2>
                <p>Save items you love to your wishlist and shop them later.</p>
                <button className="shop-now-btn" onClick={() => navigate('/products')}>
                    Start Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Back
                </button>
                <h1>My Wishlist</h1>
                <p>{wishlist.length} items saved</p>
            </div>

            <div className="wishlist-grid">
                {wishlist.map((product) => (
                    <div key={product.id} className="wishlist-card">
                        <button
                            className="remove-btn"
                            onClick={() => removeFromWishlist(product.id)}
                        >
                            <FaTrash />
                        </button>

                        <img src={product.thumbnail} alt={product.title} />

                        <div className="wishlist-card-info">
                            <h3>{product.title}</h3>
                            <p className="brand">{product.brand}</p>
                            <p className="price">${product.price}</p>

                            <button
                                className="add-to-cart-btn"
                                onClick={(e) => handleMoveToCart(product, e)}
                            >
                                <FaShoppingCart /> Move to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
