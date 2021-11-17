import React from "react";
import './AboutMe.css'
import myPhoto from '../../images/myPhoto.jpg'

const AboutMe = () => {

    return (
        <section className='about-me' id='AboutMe'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__content'>
                <img className='about-me__photo' src={myPhoto} alt='Фото' />
                <h3 className='about-me__name'>Виталий</h3>
                <h4 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h4>
                <p className='about-me__description'>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. 
                    Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал 
                    в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься 
                    фриланс-заказами и ушёл с постоянной работы.
                </p>
                <ul className='about-me__links'>
                    <li className='about-me__links-item'><a href='https://www.facebook.com/' target='blank' className='about-me__link'>Facebook</a></li>
                    <li className='about-me__links-item'><a href='https://github.com/' target='blank' className='about-me__link'>Github</a></li>
                </ul>
            </div>
        </section>
    );
};

export default React.memo(AboutMe);