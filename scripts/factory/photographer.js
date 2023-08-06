//création et affichage d'un photographe
function photographerFactory(data) {
    const { id, name, portrait, tagline, city, country, price } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.href= './photographer.html?id=' + id;
        link.ariaLabel = name;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "protrait du photographe" + name)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3');
        h3.textContent = city+', '+ country;
        const tag = document.createElement( 'h4');
        tag.textContent = tagline;
        const rate = document.createElement( 'h5');
        rate.textContent = price+'€/jour';
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