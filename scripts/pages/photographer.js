// récupération de l'id du photographe sélectionné passé dans l'URL 
let params = new URL(document.location).searchParams;
let photographerId = params.get("id");


async function getPhotographersById(photographerId) {
    let infoPhotographers = []
    let photographe = []
    await fetch("/data/photographers.json")
        .then(reponse => reponse.json())
        .then((data) => {
            infoPhotographers = data.photographers
            mediaPhotographers = data.media
            console.log(infoPhotographers)
            console.log(mediaPhotographers)
            photographe = infoPhotographers.filter((photographer) => photographer.id == photographerId)
            photographeMedias = mediaPhotographers.filter((photographer) => photographer.photographerId == photographerId)
            console.log(photographe);           
            console.log(photographeMedias);           
        })
        .catch((error) => error)
        return ({photographer : [...photographe, ...photographeMedias]})
}
getPhotographersById(photographerId)


