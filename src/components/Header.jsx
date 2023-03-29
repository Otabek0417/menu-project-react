import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <NavLink to="/" className="filter-btn">all</NavLink>
          <NavLink to="/breakfast" className="filter-btn">breakfast</NavLink>
          <NavLink to="/lunch" className="filter-btn">lunch</NavLink>
          <NavLink to="/shakes" className="filter-btn">shakes</NavLink>
        </div>
      </section>
    </div>
  );
}

export default Header;
