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
    </nav>
  );
};

export default ReactLink;
