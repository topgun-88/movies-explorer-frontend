import React from "react";
import { Link } from 'react-router-dom';
import './SignForm.css'
import logo from '../../images/logo.svg';
import useFormAndValidation from '../../hooks/FormValidation'

const Login = ({onAuthorization}) => {
    const {values, handleChange, errors, isValid } = useFormAndValidation();
    const [responceText, setResponceText] = React.useState('');

    function handleAuthorization(e) {
        e.preventDefault()
        onAuthorization(values.email, values.password)
            .catch(err => setResponceText(err));
    };

    return (
        <form className='sign-form' onSubmit={handleAuthorization}>
            <div className='sign-fom__container'>
                <img className='sign-form__logo' src={logo} alt='логотип'/>
                <h2 className='sign-form__title'>Рады видеть!</h2>
                <div className='sing-form__inputs'>
                    <label className='sing-form__label'>E-mail</label>
                    <input className='sing-form__input' type='email' value={values.email ? values.email : ''} name='email' onChange={handleChange} placeholder='Email' required/>
                    <span className='sing-form__span'>{errors.email ? errors.email : ' '}</span>
                    <label className='sing-form__label'>Пароль</label>
                    <input className='sing-form__input sing-form__input_password' type='password' value={values.password ? values.password : ''} name='password' onChange={handleChange} placeholder='Пароль' required/>
                    <span className='sing-form__span'>{errors.password ? errors.password : ' '}</span>
                </div>
                <span className='sign-form__error'>{responceText}</span>
                <button disabled={!isValid} className='sign-form__submit'>Войти</button>
                <p className='sign-form__question'>Ещё не зарегистрированы? <Link className='sign-form__link' to='/signup'>Регистрация</Link></p>
            </div>
        </form>
    );
};

export default React.memo(Login);