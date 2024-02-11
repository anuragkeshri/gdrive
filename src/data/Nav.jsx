import React from 'react'
import style from './nav.module.css'
import bell from "./bell.png"
import setting from "./setting.png"
import profile from "./profile.jpg"
import drive from "./drive.png"
const Nav = () => {
  const userid = sessionStorage.getItem("username");
  return (
    <>
      <nav className={style.nav}>
      <img src={drive} alt="drive"/>
        <h3 style={{color:"blue", marginLeft:"20px"}}> Google drive</h3>
       
        <input type = "search"  style={{marginLeft:"150px" , width:"400px", height:"30px",borderRadius:"20px", backgroundColor:"#448EE4"}} placeholder='      Search files'/>
        <icon>
            <img src={bell} alt= "bellimage" style={{marginLeft:"100px",width:"30px"}}/>
            <img src={setting} alt= "settingimage" style={{marginLeft:"20px", width:"30px", paddingTop:"15px"}} />
            <img src={bell} alt= "bellimage" style={{marginLeft:"20px",width:"30px"}}/>
            {userid}
            <img src={profile} alt= "proimage" style={{marginLeft:"170px", width:"50px", height:"50px", borderRadius:"50px"}}/>
        </icon>
      </nav>
    </>
  )
}

export default Nav
