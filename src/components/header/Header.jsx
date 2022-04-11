import "./header.css";
import  bgimg from "./bgimg.JPG"

export default function Header() {
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & PHP</span>
          <span className="headerTitleLg">Reading Room</span>
        </div>
        <img
          className="headerImg"
          //src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          src={bgimg}
          alt=""
        />
      </div>
    );
  }
