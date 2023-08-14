class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log('une erreur est survenue', err))
    }
    /* async getmedias() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('une erreur est survenue', err))
    } */
}
class /* MovieApi */PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }

    async /* getMovies */getPhotographers() {
        return await this.get()
    }
}

/* class MediaApi extends Api {
    constructor(url) {
        super(url)
    }
    async getMedias() {
        return await this.getmedias()
    }
} */