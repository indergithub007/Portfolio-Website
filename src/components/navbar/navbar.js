import React from "react";
import './navbar.css';
import i from '../../assets 2/i2.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
       <nav className="navbar">
        <img src={i} alt="Logo" className="logo"/>
            {/* <div className="logo">Inder</div> */}
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Project</Link>
            <Link className="desktopMenuListItem">Resume</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skills</Link>
        </div>
        {/* <button className="desktopMenuBtn">
            <img src="" alt="" className="desktopMenuImg" /> Contact Me
        </button> */}
       </nav>
    )
}

export default Navbar;
