import './App.css';
import React, {useState} from 'react'
import { Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";




function Navbar() {
    const[sidebar, setBar] = useState(false)

    const showBar = () => setBar(!sidebar)
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className= 'nav-menu-items' onClick={showBar}>
                    <li className="navBar-toggle">
                        <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' className="icons">
                    <AiIcons.AiOutlineHome />Home
                    </Link>
                    </li>
                    <li>
                    <Link to='/login' className="icons">
                    <HiIcons.HiOutlineLogin />Login/Signup
                    </Link>
                    <Link to='/bikes' className="icons">
                    <MdIcons.MdDirectionsBike />Bikes
                    </Link>
                    <Link to='/skates' className="icons">
                    <GiIcons.GiRollerSkate />Skates
                    </Link>
                    <Link to='/skateboards' className="icons">
                    <GiIcons.GiSkateboard/>Skateboards
                    </Link>
                    
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

