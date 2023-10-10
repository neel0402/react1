import React from "react";
import ReactDOM from "react-dom/client";
import ClassCom from "./components/ClassCom";
import FunCom from "./components/FunCom";

import "./index.css";

const nameEle = <h1>NEEL</h1>;
const arr = ["neel", "urvish"];

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(
// <div>
//   <h1>hello world</h1>
//   <h1>hello world</h1>
//   {nameEle}
//   <h1>{90+100}</h1>

//   {arr.map((e)=>{
//     console.log("-------",e);
//     return <h1>{e}</h1>;
//   })}
// </div>);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClassCom />
    <ClassCom />
    <ClassCom />
    <FunCom/>
  </React.StrictMode>
);
