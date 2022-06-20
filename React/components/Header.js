import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <nav><Link to="/">Home</Link></nav>
        <nav><Link to="/Catalogue">Catalogue</Link></nav>
        <nav><Link to="/Contact">Contact</Link></nav>
    </header>
  )
}