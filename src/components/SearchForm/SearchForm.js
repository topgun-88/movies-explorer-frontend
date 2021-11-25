import React from "react";
import './SearchForm.css'

const SearchForm = ({
    searchMovies,
    isShorts,
    setIsShorts,
    searchValue,
    setSearchValue
}) => {
    function handleSubmit(e) {
        e.preventDefault();
        searchMovies()
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form__search-field'>
                <label className='search-form__label'>
                    <svg className='search-form__label-ico' width="34" height="34" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.793 18.264a3.667 3.667 0 1 1-5.186-5.186 3.667 3.667 0 0 1 5.186 5.186Zm.44 1.383a5.001 5.001 0 1 1 .943-.943l3.567 3.567-.943.942-3.567-3.566Z" fill="#959595"/></svg>
                    <input className='search-form__input-text' type='text' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Фильм'/>
                </label>
                <button className='search-form__submit'>
                    <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.793 18.264a3.667 3.667 0 1 1-5.186-5.186 3.667 3.667 0 0 1 5.186 5.186Zm.44 1.383a5.001 5.001 0 1 1 .943-.943l3.567 3.567-.943.942-3.567-3.566Z" fill="#fff"/></svg>
                </button>
                <div className='search-form__stripe'/>
                <label className='search-form__checkbox' >
                    <input className='search-form__default-checkbox' type='checkbox' checked={isShorts} onChange={()=>setIsShorts(!isShorts)}/>
                    <span className='search-form__pseudo-checkbox'><span className='search-form__pseudo-checkbox-holder'/></span>
                    <span className='search-form__checkbox-text'>Короткометражки</span>
                </label>
            </div>
        </form>
    );
};

export default React.memo(SearchForm);