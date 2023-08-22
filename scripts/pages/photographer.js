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
        photographeSelected.forEach(photographdata => {
            const Template = new photographCard(photographdata)
            this.$photographSection.appendChild(Template.createPhotographCard())
        })
        // récupération des médias du photographe sélectionné
        const allMediasPhotographers = photographData.media
        const photographMediaSelected = allMediasPhotographers.filter((photographer) => photographer.photographerId == photographerId)
        
        // ecoute du bouton pour ouvrir la modal et masquer le reste de la page
        // et insertion du nom du photographe sur le titre de la modal de contact
        const openModal = document.querySelector(".photograph-header button")
        const title = document.querySelector('.modal header h1')
        openModal.addEventListener("click", () => {
            displayModal(photographeSelected)
            title.insertAdjacentHTML('beforeend',`<div id="theArtisteName">${photographeSelected[0].name}</div>`)
        })

        renderMediaCard(photographMediaSelected)
        //récupération de l'index de l'image cliquée pour ouvrir la lightBox
        checkIdImageSelected()
        //gestion des likes
        totalLikes(photographMediaSelected)
        //gestion du tri des cards
        const selected = document.querySelector('select')
        selected.addEventListener('change', (e) => {
            filterOption(photographMediaSelected, e)
            
        })

        /* keypressOption(photographMediaSelected) */
        keypressImages()
        keypressHeart(photographMediaSelected)
    }
}
const app = new App()
app.main()

 
