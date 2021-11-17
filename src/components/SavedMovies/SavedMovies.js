import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import savedCards from "../../consts/savedCards";
import Preloader from '../Preloader/Preloader';

const SavedMovies = () => {
    const [isShorts, setIsShorts] = React.useState(false)

    return (
        <main className='movies'>
            <SearchForm isShorts={isShorts} setIsShorts={setIsShorts}/>
            <MoviesCardList isShorts={isShorts} cards={savedCards} isSaved={true}/>
            <Preloader />
            <More />
        </main>
    );
};


export default React.memo(SavedMovies);