import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/FormValidation';
import MainApi from '../../utils/MainApi';

const Profile = ({onLogout}) => {
    const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
    const {values, handleChange, errors, isValid } = useFormAndValidation();
    const [submitText, setSubmitText] = React.useState('Редактировать');
    const [responceStatus, setResponceStatus] = React.useState(false);
    const [responceText, setResponceText] = React.useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitText('Сохранение...')
        MainApi.setUserInfo(values.name !== undefined ? values.name : currentUser.name, values.email !== undefined ? values.email : currentUser.email)
            .then(user => {
                setResponceStatus(true);
                setResponceText('Профиль обновлен');
                setCurrentUser(user);
            }).catch(err => {
                console.log(err)
                setResponceStatus(false);
                setResponceText(err);
            }).finally(() => setSubmitText('Редактировать'));
    }

    return (
        <form className='profile' onSubmit={handleSubmit}>
            <h2 className='profile__title'>{`Привет, ${currentUser.name}`}</h2>
            <div className='profile__input-block'>
                <label className='profile__label'>
                    <span className='profile__label-span'>Имя</span>
                    <input className='profile__input' name='name' value={values.name !== undefined ? values.name : currentUser.name} onChange={handleChange} type='text' required minLength='2' maxLength='30'/>
                    <span className='profile__error'>{errors.name}</span>
                </label>
                <label className='profile__label'>
                    <span className='profile__label-span'>E-mail</span>
                    <input className='profile__input' name='email' value={values.email !== undefined ? values.email : currentUser.email} onChange={handleChange} type='email' required/>
                    <span className='profile__error'>{errors.email}</span>
                </label>
            </div>
            <span className={`profile__responce ${responceStatus ? '': 'profile__responce_fail'}`}>{((!values.name || values.name === currentUser.name) && (!values.email || values.email === currentUser.email)) || !responceStatus ? responceText : ''}</span>
            <button disabled={!isValid || ((!values.name || values.name === currentUser.name) && (!values.email || values.email === currentUser.email))} className='profile__submit'>{submitText}</button>
            <button className='profile__signout-btn' type='button' onClick={onLogout}>Выйти из аккаунта</button>
        </form>
    );
};

export default React.memo(Profile);