// ecoute du bouton pour ouvrir la lightBox et masquer le reste de la page
const LightBox = document.getElementById('mediaModal')
// fonction d'ouverture de la modal des médias
function displayLightBoxModal() {
    LightBox.style.display = "block";
    LightBox.style.visibility = "visible"
    LightBox.setAttribute("aria-hidden", false)
    pagecontent.style.visibility = "hidden"
    
}
// fonction de fermeture de la modal des médias
function closeLightBoxModal() {
    /* const modal = document.getElementById("contact_modal"); */
    LightBox.style.display = "none";
    LightBox.setAttribute("aria-hidden", true);
    pagecontent.style.visibility = "visible"
    pagecontent.setAttribute("aria-hidden", false)
}

