import React from "react";
import './AboutProject.css';

const AboutProject = () => {

    return (
        <section className='about-project' id='AboutProject'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__descriptions'>
                <div className='about-project__description'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__description'>
                    <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__diagram'>
                <div className='about-project__diagram-element about-project__diagram-element_type_black'>1 неделя</div>
                <div className='about-project__diagram-element about-project__diagram-element_type_gray'>4 недели</div>
                <p className='about-project__diagram-text'>Front-end</p>
                <p className='about-project__diagram-text'>Back-end</p>
                
            </div>
        </section>
    );
};

export default React.memo(AboutProject);