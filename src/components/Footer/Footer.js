import React from "react";
import './Footer.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х Movies Explorer.</p>
            <div className='footer__row'>
                <p className="footer__copyright">&copy; 2021</p>
                <nav><ul className="footer__nav">
                    <li className="footer__nav-item"><a href="https://practicum.yandex.ru/" target="blank" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__nav-item"><a href="https://github.com/" target="blank" className="footer__link">Github</a></li>
                    <li className="footer__nav-item"><a href="https://www.facebook.com/" target="blank" className="footer__link">Facebook</a></li>
                </ul></nav>
            </div>
        </footer>
    );
};

export default React.memo(Footer);