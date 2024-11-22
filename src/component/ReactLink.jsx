import React from "react";
import { NavLink } from "react-router-dom";
import "./cssfolder/navbar.css";

const ReactLink = () => {
  return (
    <nav>
      <NavLink className="title" to="/admin/register">
        Admin Register
      </NavLink>

      <>
        <NavLink to="/admin/logout">Logout</NavLink>
      </>

      <NavLink to="/admin/log-in">Admin Login</NavLink>

      <NavLink  to='/product' style={{marginRight:"20px"}}>Product</NavLink>
      <NavLink to='/product/create' style={{marginRight:"20px"}}>Create Product</NavLink>
    </nav>
  );
};

export default ReactLink;
