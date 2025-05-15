import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa";

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "40px 20px",
            fontFamily: "'Segoe UI', sans-serif",
            backgroundColor: "#f5f7fa",
            minHeight: "100vh",
            color: "#1c1c1c"
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.4rem",
            fontWeight: "700",
            color: "royalblue",
            gap: "12px",
            marginBottom: "35px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
            flexWrap: "wrap"
        },
        input: {
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "2px solid #ccc",
            minWidth: "240px",
            outline: "none",
            transition: "border 0.2s ease, box-shadow 0.2s",
        },
        select: {
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "2px solid #ccc",
            minWidth: "180px",
            outline: "none",
            transition: "border 0.2s ease, box-shadow 0.2s",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px"
        }
    };

    return (
        <div style={styles.container}>
            <h1
                style={styles.heading}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = "royalred";
                    e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = "royalblue";
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                <FaStoreAlt size={32} color="rebeccapurple" />
                Explore My Products
            </h1>

            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                    onFocus={(e) => {
                        e.target.style.border = "2px solid royalblue";
                        e.target.style.boxShadow = "0 0 8px rgba(65, 105, 225, 0.3)";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "2px solid #ccc";
                        e.target.style.boxShadow = "none";
                    }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                    onFocus={(e) => {
                        e.target.style.border = "2px solid royalblue";
                        e.target.style.boxShadow = "0 0 8px rgba(65, 105, 225, 0.3)";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "2px solid #ccc";
                        e.target.style.boxShadow = "none";
                    }}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
        </div>
    );
}