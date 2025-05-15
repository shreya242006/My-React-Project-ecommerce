import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#B0E0E6", // deep black for strong contrast
        color: "#B0E0E6",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "#353535", // vibrant orange for brand recall
        fontWeight: "bold",
        letterSpacing: "1.5px",
        transition: "color 0.3s ease"
    };

    const logoHoverStyle = {
        color: "blue"
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "color 0.3s ease"
    };

    const cartCountStyle = {
        backgroundColor: "#ffd600", // bright yellow badge
        color: "#1a1a1a", // black text on yellow
        borderRadius: "12px",
        padding: "2px 8px",
        fontSize: "14px",
        fontWeight: "bold",
        minWidth: "24px",
        textAlign: "center"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>MyShop</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
