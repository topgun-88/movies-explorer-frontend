import React from "react";
import { Link } from 'react-router-dom';
import './SignForm.css'
import logo from '../../images/logo.svg';
import useFormAndValidation from '../../hooks/FormValidation'

const Register = ({onRegistration}) => {
    const {values, handleChange, errors, isValid } = useFormAndValidation();
    const [responceText, setResponceText] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onRegistration(values.name, values.email, values.password)
            .catch(err => setResponceText(err));
    };

    return (
        <form className='sign-form' onSubmit={handleSubmit}>
            <div className='sign-fom__container'>
                <img className='sign-form__logo' src={logo} alt='логотип'/>
                <h2 className='sign-form__title'>Добро пожаловать!</h2>
                <div className='sing-form__inputs'>
                    <label className='sing-form__label'>Имя</label>
                    <input className='sing-form__input' type='text' value={values.name ? values.name : ''} onChange={handleChange} name='name' placeholder='Имя' required minLength='2' maxLength='30'/>
                    <span className='sing-form__span'>{errors.name ? errors.name : ' '}</span>
                    <label className='sing-form__label'>E-mail</label>
                    <input className='sing-form__input' type='text' value={values.email ? values.email : ''} onChange={handleChange} name='email' placeholder='Email' required/>
                    <span className='sing-form__span'>{errors.email ? errors.email : ' '}</span>
                    <label className='sing-form__label'>Пароль</label>
                    <input className='sing-form__input sing-form__input_password' type='password' value={values.password ? values.password : ''} onChange={handleChange} name='password' placeholder='Пароль' required/>
                    <span className='sing-form__span'>{errors.password ? errors.password : ' '}</span>
                </div>
                <span className='sign-form__error'>{responceText}</span>
                <button disabled={!isValid} className='sign-form__submit'>Зарегистрироваться</button>
                <p className='sign-form__question'>Уже зарегистрированы? <Link className='sign-form__link' to='/signin'>Войти</Link></p>
            </div>
        </form>
    );
};

export default React.memo(Register);