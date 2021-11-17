import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import cards from "../../consts/cards";
import Preloader from '../Preloader/Preloader';

const Movies = () => {
    const [isShorts, setIsShorts] = React.useState(false)

    return (
        <main className='movies'>
            <SearchForm isShorts={isShorts} setIsShorts={setIsShorts}/>
            <MoviesCardList isShorts={isShorts} cards={cards} isSaved={false}/>
            <Preloader />
            <More />
        </main>
    );
};

export default React.memo(Movies);