import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (


        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link">
                        Orders
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>

        // <div>
        //     <Link to='/'>Home</Link>
        //     <Link to='/about'>About</Link>
        //     <Link to='/orders'>Orders</Link>
        //     <Link to='/login'>Login</Link>
        // </div>
    );
};

export default Header;