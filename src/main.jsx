import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import 'react-toastify/dist/ReactToastify.css';//import css of toastify from its document ok..
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter future={{ v7_relativeSplatPath: true }}>
    <ToastContainer/>
    <App />
  </BrowserRouter>
);
