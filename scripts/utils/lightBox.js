// ecoute du bouton pour ouvrir la lightBox et masquer le reste de la page
const LightBox = document.getElementById('mediaModal')
// fonction d'ouverture de la modal des médias
function displayLightBoxModal(code) {
    LightBox.style.display = "block";
    LightBox.style.visibility = "visible"
    LightBox.setAttribute("aria-hidden", false)
    pagecontent.style.visibility = "hidden"
    launchLightBox(code)
    window.scrollTo(0,180);
    
}
// fonction de fermeture de la modal des médias
function closeLightBoxModal() {
    LightBox.style.display = "none";
    LightBox.setAttribute("aria-hidden", true);
    pagecontent.style.visibility = "visible"
    pagecontent.setAttribute("aria-hidden", false)
    location.reload()

}
//Le parametre "code" vient de l'index de la photo selectionnée
async function launchLightBox(code) {
    console.log(code);
    const photosSectionLightBox = document.querySelector('.boxmedia')
    //recupération des données
    let params = new URL(document.location).searchParams
    let photographerId = params.get("id")
    datasurl = new PhotographerApi(`./data/photographers.json`)
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
    let imgselect = document.getElementById(`${code}`)
    console.log(imgselect);
    imgselect.classList.add('active')
    
    //implémentation des boutons next et previous///////////////////////////////////////////////
    const precedent = document.getElementById('left-arrow')
    const suivant = document.getElementById('right-arrow')
    const images = document.querySelectorAll('.boxmedia article')
    const nbslides = images.length
    let imgactive = document.querySelector('.active')
    console.log(imgactive);
    console.log(imgactive.id);
    let count = imgactive.id
    // bouton previous///////////////////////////////////////////
    function previous () {
        images[count].classList.remove('active')
        if(count > 0){
            count--
        }else {
            count = nbslides-1
        }
        images[count].classList.add('active')
        console.log(count);
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
        console.log(count);
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

