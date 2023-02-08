import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.scss";


const Header = () => {
  return (
    <>
    <nav>
        <Link to="/" className="logo">
            <h2>Allan Fernandes</h2>
            <span>{`{}`}</span>
        </Link>
        <div className="nav-right">
            <Link to="/">Blog</Link>
        </div>
    </nav>
    <Outlet />
    </>

  )
}

export default Header