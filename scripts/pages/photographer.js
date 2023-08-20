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
        
        renderMediaCard(photographMediaSelected)
        //récupération de l'index de l'image cliquée pour ouvrir la lightBox
        checkIndexImageSelected()
        //gestion des likes
        totalLikes(photographMediaSelected)
        //gestion du tri des cards
        const selected = document.querySelector('select')
        selected.addEventListener('change', (e) => {
            filterOption(photographMediaSelected, e)
        })
    }
}
const app = new App()
app.main()

 
