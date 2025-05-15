import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#0a0a23", // Deep navy for better contrast
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
            overflow: "hidden"
        },
        title: {
            fontSize: "3.5rem",
            color: "#00d4ff", // Neon blue
            marginBottom: "20px",
            textShadow: `
                0 0 5px #00d4ff,
                0 0 10px #00d4ff,
                0 0 20px #00d4ff,
                0 0 40px #00d4ff
            `,
            animation: "pulse 2s infinite"
        },
        message: {
            fontSize: "1.5rem",
            color: "#e0f7ff",
            marginBottom: "40px",
            textShadow: "0 0 8px #99f0ff"
        },
        button: {
            padding: "14px 35px",
            fontSize: "1.3rem",
            backgroundColor: "#00b8ff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            textDecoration: "none",
            boxShadow: "0 0 10px #00b8ff, 0 0 20px #00b8ff",
            textAlign: "center",
        },
        buttonHover: {
            backgroundColor: "#1ad4ff",
            boxShadow: "0 0 15px #00b8ff, 0 0 30px #00b8ff"
        },
        '@keyframes pulse': {
            from: {
                textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff"
            },
            to: {
                textShadow: "0 0 20px #00d4ff, 0 0 40px #00d4ff"
            }
        }
    };

    const handleButtonHover = (e, hovering) => {
        Object.assign(e.target.style, hovering ? styles.buttonHover : styles.button);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us. Your order is being processed.</p>
            <a
                href="/"
                style={styles.button}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
            >
                Go to Home
            </a>
        </div>
    );
}
