//rendu de la carte d'un photographe
function photographerFactory(data) {
    const { id, name, portrait, tagline, city, country, price } = data;
    const picture = `assets/photographers/${portrait}`;
    // création de la carte du photographe
    function getUserCardDOM() {
        //création de l'article
        const article = document.createElement( 'article' );
        //creation du lien 
        const link = document.createElement( 'a' );
        link.href= './photographer.html?id=' + id;
        link.ariaLabel = name;
        // création de l'image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "protrait du photographe" + name)
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
        // articulation des éléments créés, les uns avec les autres
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(tag);
        article.appendChild(rate);
        return (article);
    }
    return { getUserCardDOM }
}