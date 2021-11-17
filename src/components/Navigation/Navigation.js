import React from "react";
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css'

const Navigation = ({loggedIn, setIsMenuOpen}) => {

    return (
        <nav><ul className='navigation'>
            {!loggedIn ? <>
                <li><Link className='navigation__signup' to='/signup'>Регистрация</Link></li>
                <li><Link className='navigation__signin' to='/signin'>Войти</Link></li>
            </> : <>
                <li><NavLink className='navigation__link' activeClassName="navigation__link_active" to='/movies'>Фильмы</NavLink></li>
                <li><NavLink className='navigation__link' activeClassName="navigation__link_active" to='/saved-movies'>Сохранённые фильмы</NavLink></li>
                <li><NavLink className='navigation__link navigation__link-profile' activeClassName="navigation__link_active" to='/profile'>Аккаунт
                    <svg className='navigation__profile-ico' xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 4C8.5 5.38071 7.38071 6.5 6 6.5C4.61929 6.5 3.5 5.38071 3.5 4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9.25C1.92893 9.25 0.25 10.9289 0.25 13V14H1.75V13C1.75 11.7574 2.75736 10.75 4 10.75H8C9.24264 10.75 10.25 11.7574 10.25 13V14H11.75V13C11.75 10.9289 10.0711 9.25 8 9.25H4Z" fill="black"/>
                    </svg>
                </NavLink></li>
                <button className='navigator__menu-btn' type='button' onClick={() => setIsMenuOpen(true)}/>
            </>}    
        </ul></nav>
    );
};

export default React.memo(Navigation);