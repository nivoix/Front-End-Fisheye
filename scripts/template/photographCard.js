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

// fonction d'assemblage des infos d'un photographe
/* function getHeaderPhotograph(data) {
    const { name, portrait, tagline, city, country, price } = data;
    const picture = `./assets/images/${portrait}`;
    const main = document.querySelector("main")
    const photographHeader = document.querySelector(".photograph-header")
    //création de l'article
    const article = document.createElement( 'article' );
    //création du nom du photographe
    const h1 = document.createElement( 'h1' );
    h1.textContent = name;
    h1.setAttribute("role", "nom du photographe");
    //création de sa ville et pays
    const h3 = document.createElement( 'h3');
    h3.textContent = city+', '+ country;
    h3.setAttribute("role", "localisation du photographe");
    // création de son slogan
    const tag = document.createElement( 'h4');
    tag.textContent = "\u00ab"+ tagline +"\u00bb";
    tag.setAttribute("role", "slogan du photographe");
    // création de son tarif
    const rate = document.createElement( 'h5');
    rate.textContent = price+'€/jour';
    rate.setAttribute("role", "tarif du photographe");
    // création de l'image
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("alt", "protrait du photographe" + name)

    photographHeader.appendChild(article)

    article.appendChild(h1);
    article.appendChild(h3);
    article.appendChild(tag);

    photographHeader.appendChild(img);
    
    main.appendChild(rate);

    return (article);
} */
// fonction d'assemblage des médias d'un photographe
function getMediasPhotographe(data) {
    const { image, likes, title, photographerId, video, describVideo } = data;
    const picture = `./assets/photographers/${photographerId}/${image}`
    const film = `./assets/photographers/${photographerId}/${video}`
    
    //création de la card
    const cardPhotos = document.createElement('article');
    const link = document.createElement('a')
    link.setAttribute("href", "#")
    link.setAttribute("onclick", "displayLightBoxModal()")
    link.className = "lightBox"
    //création de la carte de l'image du média
    const cardImg = document.createElement('div')
    cardImg.className = "cardImg"
    const showMediaImg = document.createElement('img')
    const showMediaVideo = document.createElement('video')
    const showmedia = image ? showMediaImg : showMediaVideo;
    image ? showmedia.setAttribute("src", picture) : showmedia.setAttribute("src", film);
    showmedia.setAttribute("alt", "titre de l'image" + title);
    if(video) {
        showMediaVideo.src = film
        showMediaVideo.controls= true
        showMediaVideo.setAttribute("alt", describVideo)
    }
    
    //création du titre de l'image
    const cardText = document.createElement('div')
    cardText.className = "cardText"
    const titlephoto = document.createElement('p');
    titlephoto.textContent = title;
    titlephoto.setAttribute("role", "titre de la photo")
    // création du nb de likes de la photo
    const nblikes = document.createElement('span')
    nblikes.textContent = likes;

    cardPhotos.appendChild(link)

    link.appendChild(cardImg)
    cardImg.appendChild(showmedia)
    
    link.appendChild(cardText)
    cardText.appendChild(titlephoto)
    cardText.appendChild(nblikes)

    return (cardPhotos);
}

function getImagesLightBox (data) {
    const cardImgLightBox = document.getElementById('mediaModal')
    
    const {image, video} = data
    /* console.log(data);
    console.log(image);
    console.log(video); */
}
