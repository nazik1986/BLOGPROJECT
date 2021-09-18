import React from "react";
import "./topbar.css";
import icon from "../images/v-2.jpg";
import { Link } from "react-router-dom";

function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/" >WRITE</Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src={icon} alt="" />
          ) : (
          <ul className="topList">
            <li className="topListItem"> <Link className="link" to="/login" >LOGIN</Link></li>
            <li className="topListItem"> <Link className="link" to="/register" >REGISTER</Link></li>
         
          
          </ul>
          )
        }
      
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
export default TopBar;
