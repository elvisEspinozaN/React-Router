import { Link } from "react-router-dom";
import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/blue">
        Blue
      </Link>
      <Link className="nav-link" to="/red">
        Red
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  );
}
