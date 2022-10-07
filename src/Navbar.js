import React, { Fragment, useRef, useState, useEffect } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);
  return (
    <Fragment>
      <div className="container">
        <div className="inner-container">
          <img src={logo} alt="logo" className="logo" />
          <button onClick={() => setToggle(!toggle)} className="bar">
            <FaBars className="bar-icon" />
          </button>
        </div>

        <div className="list" ref={linksContainerRef}>
          <ul className="unordered" ref={linksRef}>
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
