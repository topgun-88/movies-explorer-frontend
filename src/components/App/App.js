import React from 'react';
import { Route, Switch, /* useHistory */ } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  /* const history = useHistory() */
  function handleAuthorization() {
    setLoggedIn(true)
  }

  return (<>
    <Switch>
      <Route exact path='/'>
        <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
        <Main />
        <Footer />
      </Route>
      <Route exact path='/movies'>
        <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
        <Movies />
        <Footer />
      </Route>
      <Route exact path='/saved-movies'>
        <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
        <SavedMovies />
        <Footer />
      </Route>
      <Route exact path='/profile'>
        <Header loggedIn={loggedIn} setIsMenuOpen={setIsMenuOpen}/>
        <Profile />
      </Route>
      <Route exact path='/signin'>
        <Login onAuthorization={handleAuthorization}/>
      </Route>
      <Route exact path='/signup'>
        <Register />
      </Route>
      <Route exact path='*'>
        <NotFound />
      </Route>
    </Switch>
    <Menu isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}/>
  </>);
}

export default React.memo(App);
