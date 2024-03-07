import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <button className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pills badge-secondary">
          {props.totalCounters}
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
