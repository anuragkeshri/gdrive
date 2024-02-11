import React from "react";
import style from "./data.module.css";
import Nav from "./Nav";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import Tables from "./table/Tables";

const Data = () => {
  return (
    <>
    <div className={style.bg}>

   
      <div className={style.container}>
        <Nav />

        <div className={style.flex}>
          {/* <Sidebar /> */}
           <Main /> 
        </div>
       
      </div>
      </div>
    </>
  );
};

export default Data;
