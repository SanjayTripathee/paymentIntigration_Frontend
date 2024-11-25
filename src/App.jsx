import React, { createContext, useState } from "react";
import ReactLink from "./component/ReactLink";
import ReactRouter from "./component/ReactRouter";

export let GlobalVariableContex = createContext();
const App = () => {
  let [token, setToken] = useState(localStorage.getItem("myToken"));
  return (
    <div>
      <GlobalVariableContex.Provider
        value={{ token: token, setToken: setToken }}
      >
        <ReactLink />
        <ReactRouter />
      </GlobalVariableContex.Provider>
      {/* <Payment/> */}
    </div>
  );
};

export default App;
