// récupération de l'id du photographe sélectionné passé dans l'URL 
let params = new URL(document.location).searchParams;
let photographerId = params.get("id");


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


async function displayData(photographe) {
    const photographersSection = document.querySelector(".photograph-header");
    
    photographe.forEach((photograph) => {
        console.log(photograph);
        const userCardDOM = getUserCardDOM(photograph);
        photographersSection.appendChild(userCardDOM);
    });
}
async function init() {
    // Récupère les datas des photographes
    const  {photographe}  = await getPhotographersById(photographerId);
    displayData(photographe);
}

init();