import React from "react";

const HomePageUi = ({ product }) => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Welcome to Our Product Showcase
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {product?.map((item, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={item.productImage}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                marginBottom: "5px",
              }}
            >
              Price: ${item.price}
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                marginBottom: "15px",
              }}
            >
              Quantity: {item.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageUi;
