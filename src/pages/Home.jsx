import React from "react";
import { useSelector } from "react-redux"; 
import Product from "../components/Product";
import ThemeToggle from "../components/ThemeToggle"; // ✅ Import ThemeToggle

const Home = () => {
    const darkMode = useSelector((state) => state.theme.darkMode); 

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <div className="navbar">
                <h2 className="heading">Welcome to Redux Toolkit Store</h2>
                <ThemeToggle /> {/* ✅ Switch button here */}
            </div>

            <section>
                <h3>Products</h3>
                <Product />
            </section>
        </div>
    );
};

export default Home;
