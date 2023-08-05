function photographerTemplate(data) {
    const { name, portrait } = data;
    console.log(data);

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3');
        h3.textContent = data.city+','+""+ data.country;
        const tag = document.createElement( 'h4');
        tag.textContent = data.tagline;
        const price = document.createElement( 'h5');
        price.textContent = `${data.price}`+'€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(tag);
        article.appendChild(price);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}