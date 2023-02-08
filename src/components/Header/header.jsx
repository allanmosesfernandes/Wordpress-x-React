import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.scss";


const Header = () => {
  return (
    <>
    <nav>
        <Link to="/">
            <h2>Allan Fernandes</h2>
            <span>`{}`</span>
        </Link>
    </nav>
    <Outlet />
    </>

  )
}

export default Header