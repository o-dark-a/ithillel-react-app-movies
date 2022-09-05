import React from "react";
import NavbarClasses from './Navbar.module.scss';
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className={NavbarClasses.mainNav}>
      <NavLink
        to="/"
      > Gallery
      </NavLink>
      <NavLink
        to="favorite"
      > Favorite Movies
      </NavLink>|
      <div className={NavbarClasses.loginBtns}>
        <NavLink
          to="login"
        > Log in
        </NavLink>
        <NavLink
          to="signup"
        > Sign up
        </NavLink>
      </div>
    </nav>
  )
}

export default NavbarComponent;
