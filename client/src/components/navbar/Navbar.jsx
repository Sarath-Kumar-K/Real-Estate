import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [menuScreen, setMenuScreen] = useState(false);
  return (
    <nav>
      <div className="left">
        <ol>
          <li className="logo">
            <img
              src="https://i.pinimg.com/736x/d4/20/ac/d420ac751563a3d498bd84cdf69386bb.jpg"
              alt=""
            />
            <span>NilamEstate</span>
          </li>
          <li className="left-menu">
            <a href="">Home</a>
          </li>
          <li className="left-menu">
            <a href="">About</a>
          </li>
          <li className="left-menu">
            <a href="">Contact</a>
          </li>
          <li className="left-menu">
            <a href="">Agents</a>
          </li>
        </ol>
      </div>
      <div className="right">
        <ol>
          <li className="login">
            <a href="">Sign in</a>
          </li>
          <li className="register">
            <a href="">Sign up</a>
          </li>
        </ol>
        <div className="menu-icon" onClick={() => setMenuScreen(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className={`menu ${menuScreen ? 'active' : ''}`}>
          <div className="close-menu" onClick={() => setMenuScreen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ol>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Agents</a>
            </li>
            <li>
              <a href="">Sign in</a>
            </li>
            <li>
              <a href="">Sign up</a>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
