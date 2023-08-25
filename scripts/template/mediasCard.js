function mediasCard (photos) {
    
    const { id, video, photographerId, image, describVideo, title, likes, } = photos
   
    function createMediasCard() {       
        //création de la card
        const cardPhotos = document.createElement('article')
        cardPhotos.className = "cardPhotos"
        //création de la carte de l'image du média
        const cardImg = document.createElement('div')
        cardImg.className = "cardImg"
        cardImg.setAttribute("id", id)
        // choix des balises, des sources et des titres en fonction du média
        const mediaElement = video ? document.createElement('video') : document.createElement('img')
        mediaElement.src = `./assets/images/${photographerId}/${video || image}`
        mediaElement.alt = video ? describVideo : title
        mediaElement.setAttribute('role','link')        
        mediaElement.type = video ? 'video' : 'image'        
        mediaElement.setAttribute('aria-labelledby','open lightBox')
        mediaElement.setAttribute("tabindex", "0")
        mediaElement.className = "photo"
        //création du titre de l'image
        const cardText = document.createElement('div')
        cardText.className = "cardText"
        const titlephoto = document.createElement('p');
        titlephoto.textContent = `${title}`
        titlephoto.setAttribute("role", "banner")
        // création du nb de likes de la photo
        const nblikes = document.createElement('span')
        nblikes.className = "nblikes"
        nblikes.value = parseInt(`${likes}`)
        nblikes.textContent = `${likes}`
        //création des coeurs
        const heart = document.createElement('img')
        heart.className = "heart"
        heart.setAttribute("src","./assets/heart-regular.svg") 
        heart.setAttribute('alt','heart')
        heart.setAttribute("tabindex", "0")

        cardPhotos.appendChild(cardImg)
        cardPhotos.appendChild(cardText)
        
        cardImg.appendChild(mediaElement)
        
        cardText.appendChild(titlephoto)
        cardText.appendChild(nblikes)
        cardText.appendChild(heart)
        return cardPhotos
    }
    return { photos, createMediasCard }
}
export { mediasCard }

