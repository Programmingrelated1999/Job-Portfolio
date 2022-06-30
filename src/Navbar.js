import React from "react";
import "./Navbar.css";

const Navbar = ({ content }) => {
  return (
    <li className="Navlist">
      <a href="#">{content}</a>
    </li>
  );
};

export default Navbar;
