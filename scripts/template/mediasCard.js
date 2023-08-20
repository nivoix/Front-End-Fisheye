class mediasCard {
    constructor(photos) {
        this._photos = photos
    }

    get photos() {
        return this._photos
    }

    createMediasCard() {       
        //création de la card
        this.cardPhotos = document.createElement('article');
        this.cardPhotos.className = "cardPhotos"
        this.cardPhotos.setAttribute("id", this._photos.id)
        /* this.cardPhotos.id = index */
        this.link = document.createElement('a')
        /* this.link.setAttribute("href", "#") */
        /* this.link.setAttribute("onclick", "displayLightBoxModal()") */
        this.link.className = "lightBox"
        //création de la carte de l'image du média
        this.cardImg = document.createElement('div')
        this.cardImg.className = "cardImg"
        // choix des balises, des sources et des titres en fonction du média
        this.mediaElement = this._photos.video ? document.createElement('video') : document.createElement('img')
        this.mediaElement.src = `./assets/images/${this._photos.photographerId}/${this._photos.video || this._photos.image}`
		this.mediaElement.alt = this._photos.video ? this._photos.describVideo : this._photos.title
                
        //création du titre de l'image
        this.cardText = document.createElement('div')
        this.cardText.className = "cardText"
        this.titlephoto = document.createElement('p');
        this.titlephoto.textContent = `${this._photos.title}`;
        this.titlephoto.setAttribute("role", "titre de la photo")
        // création du nb de likes de la photo
        this.nblikes = document.createElement('span')
        this.nblikes.className = "nblikes"
        this.nblikes.value = parseInt(`${this._photos.likes}`)
        this.nblikes.textContent = `${this._photos.likes}`;

        this.heart = document.createElement('img')
        this.heart.className = "heart"
        this.heart.setAttribute("src","./assets/heart-regular.svg") 

        this.cardPhotos.appendChild(this.link)

        this.link.appendChild(this.cardImg)
        this.cardImg.appendChild(this.mediaElement)
        
        this.link.appendChild(this.cardText)
        this.cardText.appendChild(this.titlephoto)
        this.cardText.appendChild(this.nblikes)
        this.cardText.appendChild(this.heart)

        return this.cardPhotos;
        }
}