// ecoute du bouton pour ouvrir la lightBox et masquer le reste de la page
const LightBox = document.getElementById('mediaModal')
// fonction d'ouverture de la modal des médias
function displayLightBoxModal(index) {
    LightBox.style.display = "block";
    LightBox.style.visibility = "visible"
    LightBox.setAttribute("aria-hidden", false)
    pagecontent.style.visibility = "hidden"
    launchLightBox(index)
    
}
// fonction de fermeture de la modal des médias
function closeLightBoxModal() {
    /* const modal = document.getElementById("contact_modal"); */
    LightBox.style.display = "none";
    LightBox.setAttribute("aria-hidden", true);
    pagecontent.style.visibility = "visible"
    pagecontent.setAttribute("aria-hidden", false)
}
async function launchLightBox(code) {
    const photosSectionLightBox = document.querySelector('.boxmedia')
    let params = new URL(document.location).searchParams
    let photographerId = params.get("id")
    datasurl = new PhotographerApi(`./data/photographers.json`)
    const data = await datasurl.get()
    const mediadata = data.media
    allDataOnePhotograph = mediadata.filter((photograph) => photograph.photographerId == photographerId)
    
    console.log(allDataOnePhotograph);
    console.log(allDataOnePhotograph);
    const dataSelected = allDataOnePhotograph.find((e, index) => index == code)
    console.log(dataSelected);
    const Template = new lightBoxModal(dataSelected)
    photosSectionLightBox.appendChild(Template.createLightBoxModal())

    /* allDataOnePhotograph.forEach(media => {
        const Template = new lightBoxModal(media)
        photosSectionLightBox.appendChild(Template.createLightBoxModal())
    }) */
}


