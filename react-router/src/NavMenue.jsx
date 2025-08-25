import React from "react";
import { Link } from "react-router";
import Contact from "./Contact";

const NavMenue = () => {
  return (
    <div>
      <nav>
        {/* <li>
          <a href="/">Home</a>
        </li>

        <li>
          {" "}
          <a href="/About">About</a>
        </li>

        <li>
          {" "}
          <a href="/Contact">Contact</a>
        </li> */}
        <Link to='/'>Home Page</Link>|
        <Link to='About'>About Page</Link>|
        <Link to='Contact'>Contact Page</Link>
      </nav>
    </div>
  );
};

export default NavMenue;
