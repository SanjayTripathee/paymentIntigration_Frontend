import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { toast } from "react-toastify";

const HomePageUi = ({ product, buttonName }) => {
  let navigate = useNavigate();
  async function handleClick (e) {
    const paymentData = {
      itemId: "product",
      totalPrice: 10,
      name: "test",
    };
    e.preventDefault();
    // console.log("Hello service");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8000/payment/process",
        paymentData,
        config
      );
    //  console.log("data",data.response);
   

     window.location.href = data.response.payment_url;

    } catch (error) {
    }
  };


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
            <div
              style={{
                display: "flex", // Arrange items horizontally
                alignItems: "center", // Align items vertically in the center
                gap: "20px", // Spacing between elements
                margin: "20px 0", // Top and bottom margin for the container
              }}
            >
              <FormControl
                style={{
                  flex: "1", // Make the FormControl take up available space
                  padding: "10px", // Padding inside FormControl
                  border: "1px solid #ccc", // Optional border styling
                  borderRadius: "5px", // Optional border radius
                }}
              >
                <RadioGroup
                  aria-labelledby="payment-radio-group"
                  defaultValue="Khalti"
                  name="payment-radio-button"
                >
                  <FormControlLabel
                    value="Khalti"
                    control={<Radio />}
                    label={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem", // Spacing between the radio button and logo
                        }}
                      >
                        <img
                          draggable="false"
                          style={{
                            height: "3rem", // Adjust the height
                            width: "5rem", // Adjust the width
                            objectFit: "contain", // Ensures the image scales properly
                          }}
                          src="https://web.khalti.com/static/img/logo1.png"
                          alt="Khalti Logo"
                        />
                      </div>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <button
                onClick={ handleClick}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#ffffff",
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease, transform 0.2s ease",
                  marginRight: "10px", // Add spacing between this button and the next
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#0056b3";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#007bff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {buttonName}
              </button>
              {/* <button
    onClick={() => handleCancel()}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#ffffff",
      backgroundColor: "#dc3545",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "#b02a37";
      e.currentTarget.style.transform = "scale(1.05)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "#dc3545";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    Cancel
  </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageUi;
