import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../SignForm/Login';
import Register from '../SignForm/Register';
import NotFound from '../NotFound/NotFound';
import Menu from '../Menu/Menu';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cheacked, setCheacked] = React.useState(true);
  const history = useHistory();

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState({});
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [isShorts, setIsShorts] = React.useState(false);
  const [isSavedShorts, setIsSavedShorts] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchSavedValue, setSavedSearchValue] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [savedErrorText, setSavedErrorText] = React.useState('');

  function tokenCheck() {
    const jwt = localStorage.getItem('token');
    return jwt && MainApi.authentication(jwt).then(() => setLoggedIn(true));
  };

  function handleAuthorization (email, password) {
    return MainApi.authorization(email, password).then(res => {
      localStorage.setItem('token', res.token)
      tokenCheck()
        .then(() => history.push('/movies'))
        .catch(err => console.log(err));
    });
  };

  function handleRegistration (name, email, password) {
    return MainApi.registration(name, email, password)
      .then(() => handleAuthorization (email, password));
  };

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('filteredSavedMovies');
    setLoggedIn(false);
    history.push('/');
  }
  
  React.useEffect(() => {
    loggedIn && 
      Promise.all([
        MainApi.getUserInfo(),
        MainApi.getSavedMovies()
      ]).then(([user, movies]) => {
        const newMovies = {};
        movies.forEach(m => {
          if (m.owner === user._id) { newMovies[m.movieId] = m };
        })
        setSavedMovies(newMovies);
        setCurrentUser(user);
      })
      .catch(err => console.log(err))
      .finally(() => setCheacked(false))
  }, [loggedIn]);

  function searchMovies() {
    if (searchValue) {
        setLoading(true)
        setErrorText('')
        MoviesApi.getMovies()
          .then(res => setMovies(res))
          .catch(() => setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
       } else {
        setErrorText('Нужно ввести ключевое слово')
       }
  };
  function searchSavedMovies() {
    setLoading(true)
    setSavedErrorText('')
    setFilteredSavedMovies(filterMovies(movies, isSavedShorts, searchSavedValue, Object.keys(savedMovies)));
  /* считаю более корректным показывать все сохраненные при пустом ипуте */
  };
  
  function saveMovie(movie) {
    MainApi.createMovie(movie)
      .then(res => {
        savedMovies[res.movieId] = res
        setSavedMovies(JSON.parse(JSON.stringify(savedMovies)))
      }).catch(err => console.log(err))
  }
  
  function deleteMovie(id) {
    MainApi.deleteMovie(savedMovies[id]._id)
      .then(res => {
        delete savedMovies[res.movieId];
        setSavedMovies(JSON.parse(JSON.stringify(savedMovies)))
      }).catch(err => console.log(err))
  }

  function filterMovies(arr, shorts, search, saves = null) {
    return arr.filter(o => {
      return (
        (
          search
            ? (
              o.nameRU && o.nameRU.toLowerCase().includes(search.toLowerCase())
            ) || (
              o.nameEN && o.nameEN.toLowerCase().includes(search.toLowerCase())
            ) || (
              o.description && o.description.toLowerCase().includes(search.toLowerCase())
            )
            : true
        ) && (
          shorts ? o.duration < 41 : true
        ) && (
          saves
            ? saves.includes(o.id.toString())
            : true
        )
      )
    })
  }

  React.useEffect(() => {
    localStorage.getItem('token') ? tokenCheck() : setCheacked(false);

    localStorage.getItem('movies') && setMovies(JSON.parse(localStorage.getItem('movies')));
    localStorage.getItem('savedMovies') && setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    localStorage.getItem('filteredMovies') && setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
    localStorage.getItem('filteredSavedMovies') && setFilteredSavedMovies(JSON.parse(localStorage.getItem('filteredSavedMovies')));
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
    setFilteredMovies(filterMovies(movies, isShorts, searchValue));
    // eslint-disable-next-line
  }, [movies, isShorts]);

  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    setFilteredSavedMovies(filterMovies(movies, isSavedShorts, searchSavedValue, Object.keys(savedMovies)));
    // eslint-disable-next-line
  }, [savedMovies, isSavedShorts]);

  React.useEffect(() => {
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    setLoading(false);
    !filteredMovies.length && searchValue && setErrorText('Ничего не найдено');
    // eslint-disable-next-line
  }, [filteredMovies]);

  React.useEffect(() => {
    localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredSavedMovies));
    setLoading(false);
    !filteredSavedMovies.length && searchSavedValue && setSavedErrorText('Ничего не найдено');
    // eslint-disable-next-line
  }, [filteredSavedMovies]);
  
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {!cheacked && <>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute exact path='/movies' loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
            <Movies 
              savedMovies={savedMovies}
              filteredMovies={filteredMovies}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              searchMovies={searchMovies}
              isShorts={isShorts}
              setIsShorts={setIsShorts}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              loading={loading}
              errorText={errorText}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path='/saved-movies' loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
            <SavedMovies
              savedMovies={savedMovies}
              filteredSavedMovies={filteredSavedMovies}
              deleteMovie={deleteMovie}
              searchSavedMovies={searchSavedMovies}
              isSavedShorts={isSavedShorts}
              setIsSavedShorts={setIsSavedShorts}
              searchSavedValue={searchSavedValue}
              setSavedSearchValue={setSavedSearchValue}
              loading={loading}
              errorText={savedErrorText}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path='/profile' loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
            <Profile onLogout={signOut}/>
          </ProtectedRoute>
          <Route exact path='/signin'>
            <Login onAuthorization={handleAuthorization} />
          </Route>
          <Route exact path='/signup'>
            <Register onRegistration={handleRegistration} />
          </Route>
          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Menu isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}/>
      </>}
    </CurrentUserContext.Provider>
  );
}

export default React.memo(App);
