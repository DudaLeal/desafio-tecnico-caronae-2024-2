import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/caronae-logo.png';

const Header = () => {
    return (
        <header className="page-header">
            <Link to='/'><img src={logo} alt="Logo" className="logo" /></Link>
            <div className="color-bars">
                <div className="color-bar bar1"></div>
                <div className="color-bar bar2"></div>
                <div className="color-bar bar3"></div>
                <div className="color-bar bar4"></div>
                <div className="color-bar bar5"></div>
                <div className="color-bar bar6"></div>
            </div>
        </header>
    );
}

export default Header;
