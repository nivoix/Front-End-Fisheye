function photographerCard (photographe){
    const { id, name, country ,portrait, city, tagline, price} = photographe
    const picture = `./assets/images/${portrait}` 
    function createPhotographeCard() {
        //création de l'article
        const article = document.createElement( 'article' )
        //creation du lien 
        const link = document.createElement( 'a' )
        link.href= './photographer.html?id=' + `${id}`
        link.ariaLabel = "En savoir plus sur ce photographe"
        link.setAttribute("role","link")
        // création de l'image
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", "protrait du photographe" + `${name}`)
        img.setAttribute("width", "200px")
        img.setAttribute("height", "200px")
        //création du nom du photographe
        const h2 = document.createElement( 'h2' )
        h2.id = "name"
        h2.textContent = `${name}`
        h2.setAttribute("role", "nom du phototgraphe")
        //création de sa ville et pays
        const h3 = document.createElement( 'h3')
        h3.textContent = `${city}`+', '+ `${country}`
        h3.setAttribute("role", "localisation du phototgraphe")
        // création de son slogan
        const tag = document.createElement( 'h4')
        tag.textContent = "\u00ab"+ `${tagline}` +"\u00bb"
        tag.setAttribute("role", "slogan du phototgraphe")
        // création de son tarif
        const rate = document.createElement( 'h5')
        rate.textContent = `${price}` + "€/jour"
        rate.setAttribute("role", "tarif du photographe")
        // articulation des éléments créés, les uns avec les autres
        article.appendChild(link)
        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(h3)
        article.appendChild(tag)
        article.appendChild(rate)

        return article
    }
    return { photographe, createPhotographeCard }
}
export { photographerCard }