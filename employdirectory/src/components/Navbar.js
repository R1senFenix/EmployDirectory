import React from "react";



function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Employee Directory
      </a>
      <form class="form-inline">
        <input class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={props.searchItem} > Search</button>
      </form>
    </nav >
  );
}

export default Navbar;
