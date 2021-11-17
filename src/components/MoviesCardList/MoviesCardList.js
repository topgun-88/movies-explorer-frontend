import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({cards, isShorts, isSaved}) => {
    const [filteredCards, setFilteredCards] = React.useState(cards)

    React.useEffect(() => {
        isShorts ? setFilteredCards(cards.filter(card => card.duration <= 40)) : setFilteredCards(cards)
        // eslint-disable-next-line
    }, [isShorts])

    return (
        <section className='card-list'>
            {filteredCards.map(el => {
                return <MoviesCard key={el.nameRU} card={el} isSaved={isSaved}/>
            })}
        </section>
    );
};

export default React.memo(MoviesCardList);