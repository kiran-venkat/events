import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import "./navbar.css";
import logo3 from "../../assets/logo3.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img style={{ width: "200px", height: "150px" }} src={logo3} />
          {/* <p className="logo-text">EVNTORG</p> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">Mission</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#possibility">Comments</a>
          </p>
          <p>
            <a href="#blog">Events</a>
          </p>
          <p>
            <a href="#footer">Contact Us</a>
          </p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Mission</a>
              </p>
              <p>
                <a href="#features">Features</a>
              </p>
              <p>
                <a href="#possibility">Comments</a>
              </p>
              <p>
                <a href="#blog">Events</a>
              </p>
              <p>
                <a href="#footer">Contact Us</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
