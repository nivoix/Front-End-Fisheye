class App {
    constructor() {
    //localisation de toutes les cartes de photographes
    this.$photographersSection = document.querySelector(".photographer_section");
    //instanciation de l'API avec l'URL en paramètre
    this.photographersApi = new PhotographerApi(`./data/photographers.json`)
    }

    async main() {
        //récupération des données provenant de la fetch
        const photographersData = await this.photographersApi.get()
        //sélection des données spécifiques aux photographes
        const photographersDataAll = photographersData.photographers;
        // pour chaque photographe: création de sa propre carte descriptive 
        photographersDataAll.forEach(photographe => {
        const Template = new photographerCard(photographe)
        this.$photographersSection.appendChild(Template.createPhotographeCard())
        })
    }
}

const app = new App()
app.main()

