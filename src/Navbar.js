import React, { Fragment, useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <img src={logo} alt="logo" />
        <div className="bars-btn">
          <button onClick={() => setToggle(!toggle)} className="bar">
            <FaBars />
          </button>
        </div>
      </div>

      {toggle && (
        <div className="menu-list">
          <div className="list">
            <ul className="unordered">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div className="icon-list">
        <div className="icons">
          <ul className="unordered-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
