import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import "./navbar.css";
import logo3 from "../../assets/logo3.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img
            onClick={() => navigate("/")}
            style={{ width: "200px", height: "150px", cursor: "pointer" }}
            src={logo3}
          />
          {/* <p className="logo-text">EVNTORG</p> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a onClick={() => navigate("/")} href="#home">
              Home
            </a>
          </p>
          <p>
            <a onClick={() => navigate("/")} href="#wgpt3">
              Mission
            </a>
          </p>
          <p>
            <a onClick={() => navigate("/")} href="#features">
              Features
            </a>
          </p>
          <p>
            <a onClick={() => navigate("/")} href="#possibility">
              Comments
            </a>
          </p>
          {/* <p>
            <a onClick={() => navigate("/")} href="#blog">
              Events
            </a>
          </p> */}
          <p>
            <a onClick={() => navigate("/")} href="#footer">
              Contact Us
            </a>
          </p>
          <p>
            <a style={{ color: "rgb(1,41,112)" }} onClick={() => navigate("/gallery")}>
              Gallery
            </a>
          </p>
          <p>
            <a style={{ color: "rgb(1,41,112)" }} onClick={() => navigate("/feedback")}>
              Feedback
            </a>
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
                <a onClick={() => navigate("/")} href="#home">
                  Home
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/")} href="#wgpt3">
                  Mission
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/")} href="#features">
                  Features
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/")} href="#possibility">
                  Comments
                </a>
              </p>
              {/* <p>
            <a onClick={() => navigate("/")} href="#blog">
              Events
            </a>
          </p> */}
              <p>
                <a onClick={() => navigate("/")} href="#footer">
                  Contact Us
                </a>
              </p>
              <p>
                <a onClick={() => navigate("/gallery")}>Gallery</a>
              </p>
              <p>
                <a onClick={() => navigate("/feedback")}>Feedback</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
