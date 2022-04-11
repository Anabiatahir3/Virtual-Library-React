//import { Link } from "react-router-dom";
import "./topbar.css";
import bookimg from "./bookimg.jpg";

export default function Topbar() {
 // const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li></ul>
        </div>
      <div className="topRight">
        <img className="topImg"
        src={bookimg}
        alt=""/>
        <i className="topSearchIcon fas fa-search"></i>
    </div>
    </div>
  );}
