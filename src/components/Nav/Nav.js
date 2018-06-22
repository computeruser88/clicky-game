import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav className="navbar">
        <a className="navbar-brand" href="/">
            Clicky Game - Game of Thrones Edition
    </a>
        <span className="user-message"></span>
        <span>Score:
        <span className="current-score"></span>  Top Score: <span className="top-score">
            </span>
        </span>
    </nav>
);

export default Nav;