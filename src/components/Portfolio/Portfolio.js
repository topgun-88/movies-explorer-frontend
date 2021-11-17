import React from "react";
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <nav><ul className='portfolio__links'>
                <li className='portfolio__links-item'><a href='https://yandex.ru/' target='blank' className='portfolio__link'>Статичный сайт<span>&#8599;</span></a></li>
                <li className='portfolio__links-item'><a href='https://yandex.ru/' target='blank' className='portfolio__link'>Адаптивный сайт<span>&#8599;</span></a></li>
                <li className='portfolio__links-item'><a href='https://yandex.ru/' target='blank' className='portfolio__link'>Одностраничное приложение<span>&#8599;</span></a></li>
            </ul></nav>
        </section>
    );
};

export default React.memo(Portfolio);