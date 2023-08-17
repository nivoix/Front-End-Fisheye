class App {
    constructor() {
    this.$photographSection = document.querySelector(".photograph-header")
    this.$photosSection = document.querySelector('.photosSection')
    
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
        // récupération et médias du photographe sélectionné
        const allMediasPhotographers = photographData.media
        const photographMediaSelected = allMediasPhotographers.filter((photographer) => photographer.photographerId == photographerId)
                
        photographMediaSelected.forEach((media) => {
            const Template = new mediasCard(media)
            this.$photosSection.appendChild(Template.createMediasCard())
        })
        //récupération de l'index de l'image cliquée pour ouvrir la lightBox
        const articles = document.querySelectorAll('.cardPhotos .lightBox .cardImg')
        Array.from(articles).forEach((article, index) => {
            article.addEventListener('click', () => {
                displayLightBoxModal(index);
            })
        })

        totalLikes (photographMediaSelected)
        
    }
}
const app = new App()
app.main()



//pour les likes//////////////////////////////////
/* let totalLike = 0;

  const displaylikes = medias.map((media) => {
    totalLike += media.likes;
    document.querySelector("#totalLike").innerHTML = totalLike;
  });
} */