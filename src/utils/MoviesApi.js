class MoviesApi {
    constructor(data) {
        this.adress = data.adress;
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }

    getMovies() {
        return fetch(this.adress)
        .then((res) => {
            return this._getResponseData(res)
        });
    };
}

export default new MoviesApi({
    adress: 'https://api.nomoreparties.co/beatfilm-movies'
});