import React from "react";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header/Header";
import Routing from "./Routing";
const App = () => {
  return (
    <div>
      <div className="m-5"></div>
      <NavBar />
      <Routing />
    </div>
  );
};

export default App;
