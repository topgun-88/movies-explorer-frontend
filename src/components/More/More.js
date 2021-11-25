import React from "react";
import './More.css';

const More = ({handleClickMore}) => {

    return (
        <section className='more'>
            <button className='more__button' type='button' onClick={handleClickMore}>Еще</button>
        </section>
    );
};

export default React.memo(More);