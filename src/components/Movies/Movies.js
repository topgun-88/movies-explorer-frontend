import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import Preloader from '../Preloader/Preloader';

const Movies = ({
    savedMovies,
    filteredMovies,
    searchMovies,
    saveMovie,
    deleteMovie,
    isShorts,
    setIsShorts,
    searchValue,
    setSearchValue,
    loading,
    errorText
}) => {
    const [cardsCount, setCardsCount] = React.useState(16);
    const [addCount, setAddCount] = React.useState(4);

    function handleClickMore() {
        setCardsCount(cardsCount + addCount)
    }

    React.useEffect(() => {
        window.addEventListener("resize", resizeThrottler, false);
        var resizeTimeout;
        function resizeThrottler() {
            if ( !resizeTimeout ) {
            resizeTimeout = setTimeout(function() {
                resizeTimeout = null;
                actualResizeHandler();
            }, 2000);}}
        function actualResizeHandler() {
            if (document.body.clientWidth > 1250) {
                setCardsCount(16);
                setAddCount(4);
            } else if (document.body.clientWidth > 710) {
                setCardsCount(8);
                setAddCount(2);
            } else {
                setCardsCount(5);
                setAddCount(2);
            }
        }
    }, [])
console.log(filteredMovies.length)
    return (
        <main className='movies'>
            <SearchForm 
                searchMovies={searchMovies}
                isShorts={isShorts}
                setIsShorts={setIsShorts}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                loading={loading}
                errorText={errorText}
            />
            {errorText ? <p className='movies__error'>{errorText}</p> : ''}
            {filteredMovies.length
                ? <MoviesCardList
                    savedMovies={savedMovies}
                    filteredMovies={filteredMovies}
                    isSaved={false}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie}
                    cardsCount={cardsCount}
                /> : ''}
            {loading && <Preloader />}
            {filteredMovies.length > cardsCount && <More handleClickMore={handleClickMore}/>}
        </main>
    );
};

export default React.memo(Movies);