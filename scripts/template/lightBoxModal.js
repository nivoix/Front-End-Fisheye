function lightBoxModal (photos) {

    const { id, title, photographerId, video, describVideo, image, } = photos
    
    function createLightBoxModal(count) {

        const cardPhoto = document.createElement('article')
        cardPhoto.setAttribute("id", id)  
        cardPhoto.setAttribute("index", count)  
        const cardImg = document.createElement('figure')
        cardImg.className = "cardImgLightBox"
        // choix des balises, des sources et des titres en fonction du média
        if(video)  {
            const mediaElement = document.createElement('video')
            mediaElement.controls = true
            mediaElement.className = "boxMediaElement"
            mediaElement.alt = title
            mediaElement.autoplay = false
            cardImg.appendChild(mediaElement)
            const mediaElementVideo = document.createElement('source')
            mediaElementVideo.src = `./assets/images/${photographerId}/${video}`
            mediaElementVideo.setAttribute("type","video/mp4")
            mediaElementVideo.setAttribute("title",`${describVideo}`)
            mediaElement.appendChild(mediaElementVideo)

        } else {
            const mediaElement = document.createElement('img')
            mediaElement.className = "boxMediaElement"
            mediaElement.alt = title
            mediaElement.src = `./assets/images/${photographerId}/${image}`
            cardImg.appendChild(mediaElement)
        }    
        //création du titre de l'image
        const cardText = document.createElement('div')
        cardText.className = "cardTextLightBox"
        const titlephoto = document.createElement('p');
        titlephoto.textContent = `${title}`;
        titlephoto.setAttribute("role", "titre de la photo")
        cardPhoto.appendChild(cardImg)
        cardPhoto.appendChild(cardText)
        cardText.appendChild(titlephoto)

        return cardPhoto
    }
    return { photos, createLightBoxModal }
}
export { lightBoxModal }