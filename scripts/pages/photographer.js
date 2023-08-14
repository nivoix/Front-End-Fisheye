// récupération de l'id du photographe sélectionné passé dans l'URL 
let params = new URL(document.location).searchParams;
let photographerId = params.get("id");
const main = document.querySelector('main')

// récupération des infos et médias du photographe sélectionné
async function getPhotographersById(photographerId) {
    let infoPhotographers = []
    let photographe = []
    let photographeMedias = []
    await fetch("./data/photographers.json")
        .then(reponse => reponse.json())
        .then((data) => {
            infoPhotographers = data.photographers
            mediaPhotographers = data.media
            photographe = infoPhotographers.filter((photographer) => photographer.id == photographerId)
            photographeMedias = mediaPhotographers.filter((photographer) => photographer.photographerId == photographerId)
        })
        .catch((error) => error)
        return ({
            photographe : [...photographe],
            photographeMedias: [...photographeMedias]
        })
}

// affichage de la page d'un photographe
async function displayData(photographe, photographeMedias) {
////// affichage des infos du photographe
    const photographersSection = document.querySelector(".photograph-header");
    photographe.forEach((photograph) => {
        const userCardDOM = getHeaderPhotograph(photograph);
        photographersSection.appendChild(userCardDOM);
    });
/////// affichage des photos du photographe
    const photosSection = document.querySelector('.photosSection')
    photographeMedias.forEach((media) => {
        const photoWall = getMediasPhotographe(media)
        photosSection.appendChild(photoWall);
        getImagesLightBox(media)
    });

}
async function init() {
    // Récupère les datas des photographes
    const  {photographe}  = await getPhotographersById(photographerId);
    const {photographeMedias} = await getPhotographersById(photographerId)
    displayData(photographe, photographeMedias);
}

init();

