import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "850px",
            margin: "60px auto",
            padding: "40px",
            backgroundColor: "#111", // Dark background
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(255, 0, 255, 0.2)",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            transition: "all 0.3s ease-in-out"
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)"
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "15px",
            color: "#FF00FF",
            textShadow: "0 0 5px #FF00FF, 0 0 10px #FF00FF"
        },
        description: {
            fontSize: "1.1rem",
            marginBottom: "20px",
            color: "#ccc",
            lineHeight: "1.6"
        },
        price: {
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "#00FFAB",
            marginBottom: "30px",
            textShadow: "0 0 4px #00FFAB"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#FF00FF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF"
        },
        buttonHover: {
            backgroundColor: "#e600e6",
            boxShadow: "0 0 15px #FF00FF, 0 0 30px #FF00FF"
        }
    };

    // Handle hover for the button
    const handleHover = (e, hovering) => {
        Object.assign(e.target.style, hovering ? styles.buttonHover : styles.button);
    };

    if (!product) {
        return <h2 style={{ color: "#fff", textAlign: "center" }}>Product not found.</h2>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
