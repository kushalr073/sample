import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import ThemeToggle from '../components/ThemeToggle';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const darkMode = useSelector(state => state.theme.darkMode);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div className={darkMode ? "dark-mode" : ""} style={{ minHeight: "100vh" }}>
            <div className="navbar">
                <h2 className="heading">Welcome to Redux Toolkit Store</h2>
                <ThemeToggle />
            </div>

            {/* ✅ Ensure cartWrapper follows grid format */}
            <div className="cartWrapper">
                {products.length > 0 ? (
                    products.map(product => (
                        <div className="cartCard" key={product.id}>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <h3>Your cart is empty</h3>
                )}
            </div>
        </div>
    );
};

export default Cart;
