class photographCard {
    constructor(photograph) {
        this._photograph = photograph
    }

    get photograph() {
        return this._photograph
    }
    
    createPhotographCard() {
        const picture = `./assets/images/${this._photograph.portrait}`;
        const main = document.querySelector("main")
        const photographHeader = document.querySelector(".photograph-header")
        //création de l'article
        this.article = document.createElement('article');
        //création du nom du photographe
        this.h1 = document.createElement('h1');
        this.h1.textContent = `${this._photograph.name}`;
        this.h1.setAttribute("role", "nom du photographe");
        //création de sa ville et pays
        this.h3 = document.createElement('h3');
        this.h3.textContent = `${this._photograph.city}`+', '+ `${this._photograph.country}`;
        this.h3.setAttribute("role", "localisation du photographe");
        // création de son slogan
        this.tag = document.createElement('h4');
        this.tag.textContent = "\u00ab"+ `${this._photograph.tagline}` +"\u00bb";
        this.tag.setAttribute("role", "slogan du photographe");
        // création de son tarif
        this.rate = document.createElement('h5');
        this.rate.textContent = `${this._photograph.price}`+"€/jour";
        this.rate.setAttribute("role", "tarif du photographe");
        // création de l'image
        this.img = document.createElement('img');
        this.img.setAttribute("src", picture)
        this.img.setAttribute("alt", "protrait du photographe" + `${this._photograph.name}`)

        photographHeader.appendChild(this.article)

        this.article.appendChild(this.h1);
        this.article.appendChild(this.h3);
        this.article.appendChild(this.tag);

        photographHeader.appendChild(this.img);
        
        main.appendChild(this.rate);

        return this.article;
        }
}

/* function getImagesLightBox (data) {
    const cardImgLightBox = document.getElementById('mediaModal')
    
    const {image, video} = data
    console.log(data);
    console.log(image);
    console.log(video);
} */
