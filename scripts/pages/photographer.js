class AppOnePhotograph {
    constructor() {
    this.$photographSection = document.querySelector(".photograph-header");
    this.$photosSection = document.querySelector('.photosSection')
    
    this.photographApi = new PhotographerApi(`./data/photographers.json`)
    }

    async main() {
        let params = new URL(document.location).searchParams;
        let photographerId = params.get("id");
        
        const photographData = await this.photographApi.get()
        const allPhotographData = photographData.photographers;
        const photographeSelected = allPhotographData.filter((photographer) => photographer.id == photographerId)
        console.log(photographeSelected);
       /*  const photograph = new photographersFactory(photographeSelected, 'photographersindex')
        console.log(photograph);
        console.log(photograph); */
        photographeSelected.forEach(photographdata => {
            const Template = new photographCard(photographdata)
            console.log(photographdata);
            this.$photographSection.appendChild(Template.createPhotographCard())
        })
    }
}
const app = new AppOnePhotograph()
app.main()

    // récupération de l'id du photographe sélectionné passé dans l'URL 
let params = new URL(document.location).searchParams;
let photographerId = params.get("id");
const main = document.querySelector('main')

// récupération des infos et médias du photographe sélectionné
/* async function getPhotographersById(photographerId) {
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
} */

// affichage de la page d'un photographe
async function displayData(photographe, photographeMedias) {
////// affichage des infos du photographe
    /* const photographersSection = document.querySelector(".photograph-header");
    photographe.forEach((photograph) => {
        console.log(photographe);
        const userCardDOM = getHeaderPhotograph(photograph);
        console.log(userCardDOM);
        photographersSection.appendChild(userCardDOM);
    }); */
/////// affichage des photos du photographe
    const photosSection = document.querySelector('.photosSection')
    photographeMedias.forEach((media) => {
        const photoWall = getMediasPhotographe(media)
        photosSection.appendChild(photoWall);
        getImagesLightBox(media)
    });

}
 /* async function init() {
    // Récupère les datas des photographes
    const  {photographe}  = await getPhotographersById(photographerId);
    const {photographeMedias} = await getPhotographersById(photographerId)
    displayData(photographe, photographeMedias);
}

init();  */

