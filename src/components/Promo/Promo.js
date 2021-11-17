import React from "react";
import './Promo.css'

const Promo = () => {

    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <nav><ul className='promo__links'>
                <li className='promo__links-item'><a href='#AboutProject' className='promo__link'>О проекте</a></li>
                <li className='promo__links-item'><a href='#Techs' className='promo__link'>Технологии</a></li>
                <li className='promo__links-item'><a href='#AboutMe' className='promo__link'>Студент</a></li>
            </ul></nav>
        </section>
    );
};

export default React.memo(Promo);