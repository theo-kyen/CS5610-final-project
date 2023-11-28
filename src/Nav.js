import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="nav mt-2 border-bottom">
      <Link
        to="/home"
        className={`nav-link ${pathname.includes("home") ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/profile"
        className={`nav-link ${pathname.includes("profile") ? "active" : ""}`}
      >
        Profile
      </Link>
    </nav>
  );
};

export default Nav;
