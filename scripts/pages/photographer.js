// récupération de l'id du photographe sélectionné passé dans l'URL 
let params = new URL(document.location).searchParams;
let photographerId = params.get("id");
const main = document.querySelector('main')


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
/* getPhotographersById(photographerId) */


async function displayData(photographe, photographeMedias) {
    const photographersSection = document.querySelector(".photograph-header");
    photographe.forEach((photograph) => {
        console.log(photograph);
        const userCardDOM = getHeaderPhotograph(photograph);
        photographersSection.appendChild(userCardDOM);
    });
    const photosSection = document.querySelector('.photosSection')
    photographeMedias.forEach((media) => {
        console.log(media);
        if(media.image != undefined){
            const photoWall = getMediasPhotographe(media)
            console.log(photoWall);
            photosSection.appendChild(photoWall);
        }

    });
}
async function init() {
    // Récupère les datas des photographes
    const  {photographe}  = await getPhotographersById(photographerId);
    const {photographeMedias} = await getPhotographersById(photographerId)
    displayData(photographe, photographeMedias);
}

init();