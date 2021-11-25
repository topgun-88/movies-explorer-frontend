class MainApi {
    constructor(data) {
        this.adress = data.adress;
    };

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return res.json().then((res) => Promise.reject(res.message));
    };

    registration(name, email, password) {
        return fetch(`${this.adress}/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    authorization(email, password) {
        return fetch(`${this.adress}/signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                password: password,
                email: email
            })
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    authentication(jwt) {
        return fetch(`${this.adress}/users/me`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            'Authorization' : `Bearer ${jwt}`}
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    getUserInfo() {
        return fetch(`${this.adress}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    setUserInfo(name, email) {
        return fetch(`${this.adress}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    getSavedMovies() {
        return fetch(`${this.adress}/movies`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    createMovie(movie) {
        return fetch(`${this.adress}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: +movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
            })
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    }

    deleteMovie(id) {
        return fetch(`${this.adress}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };
};

export default new MainApi({
    adress: 'https://api.topgun.nomoredomains.work'
});