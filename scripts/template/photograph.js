// fonction d'assemblage des infos d'un photographe
function getHeaderPhotograph(data) {
    const { name, portrait, tagline, city, country, price } = data;
    const picture = `./assets/photographers/${portrait}`;
    const main = document.querySelector("main")
    const photographHeader = document.querySelector(".photograph-header")
    //création de l'article
    const article = document.createElement( 'article' );
    //création du nom du photographe
    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    h2.setAttribute("role", "name");
    //création de sa ville et pays
    const h3 = document.createElement( 'h3');
    h3.textContent = city+', '+ country;
    h3.setAttribute("role", "localisation");
    // création de son slogan
    const tag = document.createElement( 'h4');
    tag.textContent = "\u00ab"+ tagline +"\u00bb";
    tag.setAttribute("role", "tag");
    // création de son tarif
    const rate = document.createElement( 'h5');
    rate.textContent = price+'€/jour';
    rate.setAttribute("role", "rate");
    // création de l'image
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("alt", "protrait du photographe" + name)

    photographHeader.appendChild(article)

    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(tag);

    photographHeader.appendChild(img);
    
    main.appendChild(rate);

    return (article);
}
// fonction d'assemblage des médias d'un photographe
function getMediasPhotographe(data) {
    const { image, likes, title, photographerId, video } = data;
    const picture = `./assets/photographers/${photographerId}/${image}`
    const film = `./assets/photographers/${photographerId}/${video}`
    
    //création de la card
    const cardPhotos = document.createElement('article');
    const link = document.createElement('a')
    //création de la carte de l'image du média
    const cardImg = document.createElement('div')
    cardImg.className = "cardImg"
    const showmediaimg = document.createElement('img')
    const showmediavideo = document.createElement('video')
    const showmedia = image ? showmediaimg : showmediavideo;
    image ? showmedia.setAttribute("src", picture) : showmedia.setAttribute("src", film);
    showmedia.setAttribute("alt", "titre de l'image" + title);
    if(video) {
        showmediavideo.src = film
        showmediavideo.controls= true
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