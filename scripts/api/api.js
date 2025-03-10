let medias
let photographers
export class Api {
    constructor(url) {
        this._url = url
    }
    // retour des médias
    async getMedias() {
        await fetch(this._url)
            .then(res => res.json())
            .then((res) => {
                medias = res.media;
            })
            .catch(err => console.log('une erreur est survenue', err))
        return medias
    }
    // retour des infos sur les photographes
    async getPhotographers() {
        await fetch(this._url)
            .then(res => res.json())
            .then((res) => {
                photographers = res.photographers
            })
            .catch(err => console.log('une erreur est survenue', err))
        return photographers
    }
}