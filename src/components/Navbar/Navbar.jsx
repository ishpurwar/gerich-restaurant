import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p_opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p_opensans">
            <a href="#about">About</a>
          </li>
          <li className="p_opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p_opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p_opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a className="p_opensans " href="#login">
            login / Register
          </a>
          <div />
          <a className="p_opensans" href="/">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          
          <GiHamburgerMenu color="#fff" frontsize={27} onClick={() => {setToggleMenu(true)}} />
          {ToggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              frontsize={27}
              onClick={() => {setToggleMenu(false)}}
              className="overlay__close"
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p_opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p_opensans">
                <a href="#about">About</a>
              </li>
              <li className="p_opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p_opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p_opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
