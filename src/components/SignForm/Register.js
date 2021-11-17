import React from "react";
import { Link } from 'react-router-dom';
import './SignForm.css'
import logo from '../../images/logo.svg';

const Register = () => {
    const [nameValue, setNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');


    function onSubmit() {

    };

    return (
        <form className='sign-form' onSubmit={onSubmit}>
            <div className='sign-fom__container'>
                <img className='sign-form__logo' src={logo} alt='логотип'/>
                <h2 className='sign-form__title'>Добро пожаловать!</h2>
                <div className='sing-form__inputs'>
                    <label className='sing-form__label'>Имя</label>
                    <input className='sing-form__input' type='text' value={nameValue} onChange={(e) => setNameValue(e.target.value)} placeholder='Имя' required minLength='2' maxLength='30'/>
                    <span className='sing-form__span'></span>
                    <label className='sing-form__label'>E-mail</label>
                    <input className='sing-form__input' type='email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder='Email' required/>
                    <span className='sing-form__span'></span>
                    <label className='sing-form__label'>Пароль</label>
                    <input className='sing-form__input sing-form__input_password' type='password' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder='Пароль' required/>
                    <span className='sing-form__span'>Что-то пошло не так...</span>
                </div>
                <button className='sign-form__submit'>Зарегистрироваться</button>
                <p className='sign-form__question'>Уже зарегистрированы? <Link className='sign-form__link' to='/signin'>Войти</Link></p>
            </div>
        </form>
    );
};

export default React.memo(Register);