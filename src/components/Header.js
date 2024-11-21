import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="button">Home</Link>
            <Link to="/about" className="button">About Us</Link>
        </div>
    );
};

export default Header;
