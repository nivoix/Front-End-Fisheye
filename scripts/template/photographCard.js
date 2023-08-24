
function photographCard (photograph) {

    const { name, country ,portrait, city, tagline, price} = photograph
    
    const picture = `./assets/images/${portrait}`;
    const main = document.querySelector("main")
    const photographHeader = document.querySelector(".photograph-header")
   
    function createPhotographCard() {
        //création de l'article
        const article = document.createElement('article');
        //création du nom du photographe
        const h1 = document.createElement('h1');
        h1.textContent = `${name}`;
        h1.setAttribute("role", "nom du photographe");
        //création de sa ville et pays
        const h3 = document.createElement('h3');
        h3.textContent = `${city}`+', '+ `${country}`;
        h3.setAttribute("role", "localisation du photographe");
        // création de son slogan
        const tag = document.createElement('h4');
        tag.textContent = "\u00ab"+ `${tagline}` +"\u00bb";
        tag.setAttribute("role", "slogan du photographe");
        // création de son tarif
        const rate = document.createElement('h5');
        rate.textContent = `${price}`+"€/jour";
        rate.setAttribute("role", "tarif du photographe");
        // création du coeur
        const heart = document.createElement('img')
        heart.className = "heart"
        heart.setAttribute('src', './assets/heart-solid-black.svg')
        heart.setAttribute('id', 'heart')
        // création de l'image
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", "protrait du photographe" + `${name}`)
        img.setAttribute("width", "150px")
        img.setAttribute("height", "150px")
        photographHeader.appendChild(article)
        article.appendChild(h1);
        article.appendChild(h3);
        article.appendChild(tag);
        photographHeader.appendChild(img);
        main.appendChild(rate);
        rate.appendChild(heart)

        return article;
    }

    return { photograph, createPhotographCard }
}
export { photographCard }
