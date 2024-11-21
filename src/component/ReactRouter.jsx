import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminLogin from "./webUsers/AdminLogin";
import AdminLogout from "./webUsers/AdminLogout";
import AdminRegister from "./webUsers/AdminRegister";
import AdminVerify from "./webUsers/AdminVerify";

const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          {/* index on a Route, it means that this route will be rendered when the parent route's path is matched exactly. */}
          <Route index element={<div>Home Page</div>}></Route>

          <Route path="verify-email" element={<AdminVerify />}></Route>

          <Route path="admin" element={<Outlet />}>
            <Route index element={<div>This is admin dashBoard</div>}></Route>
            <Route path="register" element={<AdminRegister />}></Route>

            <>
              <Route path="logout" element={<AdminLogout />}></Route>
            </>

            <Route path="login" element={<AdminLogin />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404 Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;
