import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { FaCartPlus, FaRegHeart, FaHome, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FcSupport } from "react-icons/fc";

function Header() {
  const { cart, animationTrigger } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (animationTrigger) {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 600);
    }
  }, [animationTrigger]);

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="main-header">
        <div className="top-header">
          <span>Sale</span>
          <p>Free shipping on orders over $50 | Spring Collection Now Live</p>
        </div>

        <header>
          <div className="logo">
            <Link to={"/"} className="logo-inner">
              <span>S</span>
              ShopCraft
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link to="/">Home</Link>
              <Link to="/products">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="header-icons">
              {/* Search */}
              <div className={`search-container ${showSearch ? 'active' : ''}`}>
                <FaSearch className="search-toggle" onClick={() => setShowSearch(!showSearch)} />
                {showSearch && (
                  <form className="search-form" onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
                      setSearchQuery("");
                      setShowSearch(false);
                    }
                  }}>
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </form>
                )}
              </div>

              {/* Wishlist */}
              <Link to="/wishlist" className="wishlist-container">
                {wishlist.length > 0 && (
                  <div className="wishlist-count">{wishlist.length}</div>
                )}
                <FaRegHeart className="wishlist-icon" />
              </Link>

              {/* Cart */}
              <div className="cart-container">
                <div className={`cart-count ${isPulsing ? 'cart-pulse' : ''}`}>{cart.reduce((total, item) => total + item.quantity, 0)}</div>
                <Link to={"/cart"}>
                  <FaCartPlus className="cart-icon-head" />
                </Link>
              </div>

              <div className="menu-container">
                <GiHamburgerMenu
                  className="icon-menu"
                  onClick={() => setShow(!show)}
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`menu-overlay ${show ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${show ? "show" : ""}`}>
        <div className="menu-header">
          <div className="menu-logo">
            <span>S</span>
            ShopCraft
          </div>
          <IoClose className="close-icon" onClick={closeMenu} />
        </div>

        <nav className="mobile-nav">
          <Link to="/" onClick={closeMenu}>
            <span className="nav-icon">
              <FaHome />
            </span>
            Home
          </Link>
          <Link to="/products" onClick={closeMenu}>
            <span className="nav-icon">
              <GiShoppingBag />
            </span>
            Shop
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <span className="nav-icon">
              <FcAbout />
            </span>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <span className="nav-icon">
              <BiSolidContact />
            </span>
            Contact
          </Link>
          <Link to="/cart" onClick={closeMenu}>
            <span className="nav-icon">
              <PiShoppingCartSimpleFill />
            </span>
            Cart
          </Link>
          <Link to="/track-order" onClick={closeMenu}>
            <span className="nav-icon">
              <MdOutlineTrackChanges />
            </span>
            Track Order
          </Link>
          <Link to="/support" onClick={closeMenu}>
            <span className="nav-icon">
              <FcSupport />
            </span>
            Support
          </Link>
        </nav>

        <div className="menu-footer">
          <div className="menu-links">
            <Link to="/shipping-info" onClick={closeMenu}>
              Shipping Info
            </Link>
            <Link to="/returns" onClick={closeMenu}>
              Returns
            </Link>
            <Link to="/faq" onClick={closeMenu}>
              FAQ
            </Link>
          </div>
          <div className="menu-contact">
            <p>Need Help?</p>
            <a href="">0300000000</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
