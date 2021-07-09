import './App.css';
import React, {useState} from 'react'
import { Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";





function Navbar() {
    const[sidebar, setBar] = useState(false)

    const showBar = () => setBar(!sidebar)
    return (
        <div className="navbarAll">
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
                    <Link to='/events' className="icons">
                    <FiIcons.FiMapPin />Local events
                    </Link>
                    <Link to='/login' className="icons">
                    <HiIcons.HiOutlineLogin />Login/Signup
                    </Link>
                    <Link to='/bikes' className="icons">
                    <MdIcons.MdDirectionsBike />Bikes
                    </Link>
                    <Link to='/skateboards' className="icons">
                    <GiIcons.GiSkateboard/>Skateboards
                    </Link>
                    <Link to='/skates' className="icons">
                    <GiIcons.GiRollerSkate />Skates
                    </Link>
                    <Link to='/cart' className="icons">
                    <HiIcons.HiOutlineShoppingCart />My cart
                    </Link>
                    <Link to='/purchase' className="icons">
                    <BiIcons.BiPurchaseTag />My purchases
                    </Link>
                    <Link to='/profile' className="icons">
                    <CgIcons.CgProfile />My profile
                    </Link>
                    <Link to='/map' className="icons">
                    <GiIcons.GiPathDistance /> Plan route
                    </Link>
                    <Link to='/chat' className="icons">
                    <BsIcons.BsChatDots/>Connect
                    </Link>
                    
                    
                    
                    </li>
                </ul>
            </nav>
        </div>
    )
}
// BiPurchaseTag

export default Navbar

