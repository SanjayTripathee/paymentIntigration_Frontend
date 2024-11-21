import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContex } from "../App";
// import { GlobalVariableContex } from "../App";

const ReactLink = () => {
  let global = useContext(GlobalVariableContex);
  return (
    <nav>
      <NavLink className="title" to="/admin/register">
        Admin Register
      </NavLink>

      {global.token ? (
        <>
          <NavLink to="/admin/logout">Logout</NavLink>
        </>
      ) : (
        <NavLink to="/admin/login">Admin Login</NavLink>
      )}
    </nav>
  );
};

export default ReactLink;
