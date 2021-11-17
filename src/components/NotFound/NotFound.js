import React from "react";
import './NotFound.css'
import { useHistory } from 'react-router-dom'; 

const NotFound = () => {

    const history = useHistory(); 
    return (
        <section className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__text'>Страница не найдена</p>
            <button className='not-found__back-btn' onClick={() => history.goBack()}>Назад</button>
        </section>
    );
};

export default React.memo(NotFound);