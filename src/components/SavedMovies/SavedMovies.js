import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({
    savedMovies,
    filteredSavedMovies,
    searchSavedMovies,
    deleteMovie,
    isSavedShorts,
    setIsSavedShorts,
    searchSavedValue,
    setSavedSearchValue,
    loading,
    errorText
}) => {
    
    return (
        <main className='movies'>
            <SearchForm
                searchMovies={searchSavedMovies}
                isShorts={isSavedShorts}
                setIsShorts={setIsSavedShorts}
                searchValue={searchSavedValue}
                setSearchValue={setSavedSearchValue}
                loading={loading}
                errorText={errorText}
            />
            {errorText ? <p className='movies__error'>{errorText}</p> : ''}
            {filteredSavedMovies.length ?
                <MoviesCardList
                    savedMovies={savedMovies}
                    filteredMovies={filteredSavedMovies}
                    isSaved={true}
                    deleteMovie={deleteMovie}
                /> : ''}
            {loading && <Preloader />}
        </main>
    );
};


export default React.memo(SavedMovies);