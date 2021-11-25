import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
    savedMovies,
    isSaved,
    filteredMovies,
    saveMovie,
    deleteMovie,
    cardsCount
}) => {
    const [savedCardsId, setSavedCardsId] = React.useState([]);
    
    React.useEffect(() => {
        setSavedCardsId(Object.keys(savedMovies));
    }, [savedMovies]);

    return (
        <section className='card-list'>
            {filteredMovies.slice(0, Math.min(filteredMovies.length, cardsCount)).map((card, i) => {
                    return  <MoviesCard
                        key={card.nameRU}
                        card={card}
                        isSaved={isSaved}
                        isLiked={savedCardsId.includes(card.id.toString())}
                        saveMovie={saveMovie}
                        deleteMovie={deleteMovie}
                    />
            })}
        </section>
    );
};

export default React.memo(MoviesCardList);