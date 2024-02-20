import React from "react";
import style from "./data.module.css";
import Nav from "../Nav/Nav";
import Main from "../main/Main";

const Data = () => {
  return (
    <>
    <div className={style.bg}>

   
      <div className={style.container}>
        <Nav />

        <div className={style.flex}>
           <Main /> 
        </div>
       
      </div>
      </div>
    </>
  );
};

export default Data;
