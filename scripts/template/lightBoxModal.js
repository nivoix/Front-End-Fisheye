class lightBoxModal {
    constructor(photos) {
        this._photos = photos
    }

    get photos() {
        return this._photos
    }

    createLightBoxModal(count) {
        this.cardPhoto = document.createElement('article')
        this.cardPhoto.id = count  
        this.cardImg = document.createElement('figure')
        this.cardImg.className = "cardImgLightBox"

        // choix des balises, des sources et des titres en fonction du média
        if(this._photos.video)  {
            this.mediaElement = document.createElement('video')
            this.mediaElement.controls = true
            this.mediaElement.className = "boxMediaElement"
            this.mediaElement.alt = this._photos.title
		    this.mediaElement.autoplay = false
            this.mediaElementVideo = document.createElement('source')
            this.mediaElementVideo.src = `./assets/images/${this._photos.photographerId}/${this._photos.video}`
            this.mediaElementVideo.setAttribute("type","video/mp4")
            this.mediaElementVideo.setAttribute("title",`${this._photos.describVideo}`)
            this.mediaElement.appendChild(this.mediaElementVideo)
        } else {
            this.mediaElement = document.createElement('img')
            this.mediaElement.className = "boxMediaElement"
            this.mediaElement.alt = this._photos.title
            this.mediaElement.src = `./assets/images/${this._photos.photographerId}/${this._photos.image}`
        }    
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