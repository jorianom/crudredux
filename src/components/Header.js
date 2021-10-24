import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navabar-dark bg-primary">
      <div className="container">
        <h1>CRUD - REACT, REST API & AXIOS</h1>
      </div>
      <a
        className="btn btn-danger -nuevo-post d-block d-md-inline-block"
        href="/productos/nuevo"
      >
        Agregar Producto &#43;
      </a>
    </nav>
  );
};

export default Header;
