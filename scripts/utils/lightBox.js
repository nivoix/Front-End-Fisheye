import { PhotographerApi } from "../api/api.js";
import { lightBoxModal } from "../template/lightBoxModal.js"
import { pagecontent } from "./contactForm.js";

// ecoute du bouton pour ouvrir la lightBox et masquer le reste de la page
const LightBox = document.getElementById('mediaModal')
// fonction d'ouverture de la modal des médias
function displayLightBoxModal(id) {
    LightBox.style.display = "block";
    LightBox.style.visibility = "visible"
    LightBox.setAttribute("aria-hidden", false)
    pagecontent.style.visibility = "hidden"
    launchLightBox(id)
    window.scrollTo(0,180);
}
export { displayLightBoxModal }

// fonction de fermeture de la modal des médias
function closeLightBoxModal() {
    LightBox.style.display = "none";
    LightBox.setAttribute("aria-hidden", true);
    pagecontent.style.visibility = "visible"
    pagecontent.setAttribute("aria-hidden", false)
    location.reload()
}
export { closeLightBoxModal }

//Le parametre "code" vient de l'index de la photo selectionnée
async function launchLightBox(id) {
    const photosSectionLightBox = document.querySelector('.boxmedia')
    //recupération des données
    let params = new URL(document.location).searchParams
    let photographerId = params.get("id")
    let datasurl = new PhotographerApi(`./data/photographers.json`)
    const data = await datasurl.get()
    //recupération des données spécifiques aux médias
    const mediadata = data.media
    //recherche des photos du photographe sélectionné
    let allDataOnePhotograph = mediadata.filter((photograph) => photograph.photographerId == photographerId)
    //affichage de toutes les images
    allDataOnePhotograph.forEach((media, count) => {
        const Template = new lightBoxModal(media)
        photosSectionLightBox.appendChild(Template.createLightBoxModal(count))
    })
    //recherche de la photo et de son titre selectionnée pour l'affichée en première
    let imgselectAll = document.querySelectorAll(`.boxmedia article`)
    let imgselect = Array.from(imgselectAll).find((img) =>img.id === id)
    let imgselectindex = Array.from(imgselectAll).findIndex((img) =>img.id === id)

    imgselect.classList.add('active')
    
    //implémentation des boutons next et previous///////////////////////////////////////////////
    const precedent = document.getElementById('left-arrow')
    const suivant = document.getElementById('right-arrow')
    const images = document.querySelectorAll('.boxmedia article')
    const nbslides = images.length
    let count = imgselectindex
    // bouton previous///////////////////////////////////////////
    function previous () {
        images[count].classList.remove('active')
        if(count > 0){
            count--
        }else {
            count = nbslides-1
        }
        images[count].classList.add('active')
    }
    precedent.addEventListener('click', previous)
    // bouton next/////////:
    function next () {
        images[count].classList.remove('active')
        if(count < nbslides -1) {
            count++
        }else {
            count = 0
        }
        images[count].classList.add('active')
    }
    suivant.addEventListener('click', next)
    // boutons clavier//////////////////:
    function keyPress(e) {
        console.log(e);
        if(e.keyCode === 37) {
            previous()
        } else if(e.keyCode === 39) {
            next()
        }else if(e.keyCode === 27) {
            location.reload()
        }
    }
    document.addEventListener('keydown', keyPress)
    ///////////////////////////////////////////////////////////////////////////////
}