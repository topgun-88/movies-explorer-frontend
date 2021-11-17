import React from "react";
import './Profile.css'

const Profile = () => {

    return (
        <form className='profile'>
            <h2 className='profile__title'>Привет, Виталий</h2>
            <div className='profile__input-block'>
                <label className='profile__label'><span className='profile__label-span'>Имя</span><input className='profile__input' type='text'></input></label>
                <label className='profile__label'><span className='profile__label-span'>E-mail</span><input className='profile__input' type='text'></input></label>
            </div>
            <button className='profile__submit'>Редактировать</button>
            <button className='profile__signout-btn' type='button'>Выйти из аккаунта</button>
        </form>
    );
};

export default React.memo(Profile);