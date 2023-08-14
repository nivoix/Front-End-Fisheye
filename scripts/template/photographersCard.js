class photographerCard {
    constructor(photographe) {
        this._photographe = photographe

    }

    get photographe() {
        return this._photographe
    }

    createPhotographeCard() {
        const picture = `${this._photographe.portrait}`;    
        //création de l'article
        this.article = document.createElement( 'article' );
        //creation du lien 
        this.link = document.createElement( 'a' );
        this.link.href= './photographer.html?id=' + `${this._photographe.id}`;
        this.link.ariaLabel = "En savoir plus sur ce photographe";
        // création de l'image
        this.img = document.createElement( 'img' );
        this.img.setAttribute("src", picture)
        this.img.setAttribute("alt", "protrait du photographe" + `${this._photographe.name}`)
        //création du nom du photographe
        this.h2 = document.createElement( 'h2' );
        this.h2.id = "name";
        this.h2.textContent = `${this._photographe.name}`;
        this.h2.setAttribute("role", "nom du phototgraphe");
        //création de sa ville et pays
        this.h3 = document.createElement( 'h3');
        this.h3.textContent = `${this._photographe.city}`+', '+ `${this._photographe.country}`;
        this.h3.setAttribute("role", "localisation du phototgraphe");
        // création de son slogan
        this.tag = document.createElement( 'h4');
        this.tag.textContent = "\u00ab"+ `${this._photographe.tagline}` +"\u00bb";
        this.tag.setAttribute("role", "slogan du phototgraphe");
        // création de son tarif
        this.rate = document.createElement( 'h5');
        this.rate.textContent = `${this._photographe.price}`;
        this.rate.setAttribute("role", "tarif du photographe");
        // articulation des éléments créés, les uns avec les autres
        this.article.appendChild(this.link);
        this.link.appendChild(this.img);
        this.link.appendChild(this.h2);
        this.article.appendChild(this.h3);
        this.article.appendChild(this.tag);
        this.article.appendChild(this.rate);

    return this.article;
    }
}

/* function getUserCardDOM(data) {
    const { id, name, portrait, tagline, city, country, price } = data;
    const picture = `./assets/photographers/${portrait}`;
    //création de l'article
    const article = document.createElement( 'article' );
    //creation du lien 
    const link = document.createElement( 'a' );
    link.href= './photographer.html?id=' + id;
    link.ariaLabel = "En savoir plus sur ce photographe";
    // création de l'image
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("alt", "protrait du photographe" + name)
    //création du nom du photographe
    const h2 = document.createElement( 'h2' );
    h2.id = "name";
    h2.textContent = name;
    h2.setAttribute("role", "nom du phototgraphe");
    //création de sa ville et pays
    const h3 = document.createElement( 'h3');
    h3.textContent = city+', '+ country;
    h3.setAttribute("role", "localisation du phototgraphe");
    // création de son slogan
    const tag = document.createElement( 'h4');
    tag.textContent = "\u00ab"+ tagline +"\u00bb";
    tag.setAttribute("role", "slogan du phototgraphe");
    // création de son tarif
    const rate = document.createElement( 'h5');
    rate.textContent = price+'€/jour';
    rate.setAttribute("role", "tarif du photographe");
    // articulation des éléments créés, les uns avec les autres
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(tag);
    article.appendChild(rate);

    return (article);
} */