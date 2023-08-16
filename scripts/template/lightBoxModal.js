class lightBoxModal {
    constructor(photos) {
        this._photos = photos
    }

    get photos() {
        return this._photos
    }

    createLightBoxModal(index) {
        this.cardPhoto = document.createElement('article')
        this.cardPhoto.id = index  
        this.cardImg = document.createElement('div')
        this.cardImg.className = "cardImgLightBox"
        // choix des balises, des sources et des titres en fonction du média
        this.mediaElement = this._photos.video ? document.createElement('video') : document.createElement('img')
        this.mediaElement.className = "boxMediaElement"
        this.mediaElement.src = `./assets/images/${this._photos.photographerId}/${this._photos.video || this._photos.image}`
		this.mediaElement.alt = this._photos.video ? this._photos.describVideo : this._photos.title
		this.mediaElement.controls = true
		this.mediaElement.autoplay = false
                
        //création du titre de l'image
        this.cardText = document.createElement('div')
        this.cardText.className = "cardTextLightBox"
        this.titlephoto = document.createElement('p');
        this.titlephoto.textContent = `${this._photos.title}`;
        this.titlephoto.setAttribute("role", "titre de la photo")

        this.cardPhoto.appendChild(this.cardImg)
        this.cardPhoto.appendChild(this.cardText)
        this.cardImg.appendChild(this.mediaElement)
        this.cardText.appendChild(this.titlephoto)

        return this.cardPhoto;
        }
}