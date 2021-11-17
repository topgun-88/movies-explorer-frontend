import React from "react";
import './MoviesCard.css';

const MoviesCard = ({card, isSaved}) => {
    const [siLiked, setIsLiked] = React.useState(false)

    function handleLike() {setIsLiked(!siLiked)}
    function handleDelete() {}

    let duration = card.duration + 'м';
    if (card.duration > 60) {
        duration = Math.floor(card.duration/60) + 'ч ' + card.duration % 60 + 'м'
    }
    
    return (
        <div className='card'>
            <img className='card__image' src={card.thumbnail} alt='постер'/>
            <h3 className='card__name'>{card.nameRU}</h3>
            {isSaved
                ? <button className='card__button' type='button' onClick={handleDelete}>
                    <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m4 5.06 2.652 2.652 1.06-1.06L5.061 4l2.651-2.652-1.06-1.06L4 2.939 1.348.287.288 1.348 2.939 4 .287 6.652l1.061 1.06L4 5.061Z" fill="#000"/></svg>
                </button>
                : <button className='card__button' type='button' onClick={handleLike}>
                    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.273 0C6.273 0 5.545.523 5 1.09 4.455.567 3.727 0 2.727 0 1.137 0 0 1.264 0 2.833c0 .785.318 1.482.91 1.962L5 8.5l4.09-3.705c.546-.523.91-1.177.91-1.962C10 1.264 8.864 0 7.273 0Z" fill={siLiked ? 'red' : 'white'}/></svg>
                </button>
            }
            <p className='card__duration'>{duration}</p>
        </div>
    );
};

export default React.memo(MoviesCard);