import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Clicky Game - Game of Thrones Edition
    </a>
        <span className="user-message">Click an image to begin!</span>
        <span>Score:
        <span className="current-score"></span>
            | Top Score: <span className="top-score">
            </span>
        </span>
    </nav>
);

export default Nav;