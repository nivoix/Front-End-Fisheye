import { PhotographerApi } from "../api/api.js"
import { openModalContactForm } from "../utils/contactForm.js"
import { renderPhotographCard } from "../factories/renderPhotographCard.js"
import { renderMediaCard } from "../factories/renderMediasCard.js"
import { checkIdImageSelected } from "../utils/indeximageSelected.js"
import { totalLikes } from "../utils/counterLikes.js"
import { closeTheModal } from "../utils/contactForm.js"
import { filterOption } from "../utils/filteredMediasCard.js"
import { keypressOption } from "../utils/keyboard.js"
import { keypressImages } from "../utils/keyboard.js"
import { keypressHeart } from "../utils/keyboard.js"


class App {
    constructor() {
        this.$photographSection = document.querySelector(".photograph-header")
        this.photographApi = new PhotographerApi(`./data/photographers.json`)
    }
    async main() {
        // récupération de l'id du photographe sélectionné passé dans l'URL 
        let params = new URL(document.location).searchParams
        let photographerId = params.get("id")
        // récupération des infos du photographe sélectionné
        const photographData = await this.photographApi.get()
        const allPhotographData = photographData.photographers
        const photographeSelected = allPhotographData.filter((photographer) => photographer.id == photographerId)
        // récupération des médias du photographe sélectionné
        const allMediasPhotographers = photographData.media
        const photographMediaSelected = allMediasPhotographers.filter((photographer) => photographer.photographerId == photographerId)
        openModalContactForm(photographeSelected)
        renderPhotographCard(photographeSelected)/* 
        getMediaPhotographSelect(photographData, photographerId) */
        renderMediaCard(photographMediaSelected)
        //récupération de l'index de l'image cliquée pour ouvrir la lightBox
        checkIdImageSelected()
        //gestion des likes
        totalLikes(photographMediaSelected)
        closeTheModal()
        //gestion du tri des cards
        const selected = document.querySelector('select')
        selected.addEventListener('change', (e) => {
            filterOption(photographMediaSelected, e)
        })
        keypressOption(photographMediaSelected)
        keypressImages()
        keypressHeart(photographMediaSelected)
    }
}
const app = new App()
app.main()