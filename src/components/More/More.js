import React from "react";
import './More.css';

const More = () => {

    return (
        <section className='more'>
            <button className='more__button' type='button'>Еще</button>
        </section>
    );
};

export default React.memo(More);