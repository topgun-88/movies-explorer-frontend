import React from "react";
import './Header.css'
import Navigation from "../Navigation/Navigation";
import { Link } from 'react-router-dom';

const Header = ({ loggedIn, setIsMenuOpen }) => {

    return (
        <header className='header'>
            <Link className='header__logo' to='/'/>
            <Navigation loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
        </header>
    );
};

export default React.memo(Header);