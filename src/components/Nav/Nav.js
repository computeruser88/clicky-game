import React from "react";
import "./Nav.css";

const Nav = (props) => (
    <nav className="navbar">
        <a className="navbar-brand" href="/">
            Clicky Game - Game of Thrones Edition
    </a>
        <span className="user-message">{props.userMessage}</span>
        <span className="score-line">Score: {props.currentScore} | Top Score: {props.topScore}</span>
    </nav>
);

export default Nav;