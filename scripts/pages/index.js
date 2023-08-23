import { photographerCard } from "../template/photographersCard.js";
import { Api } from "../api/api.js";
class App {
    constructor() {
        //localisation de toutes les cartes de photographes
        this.$photographersSection = document.querySelector(".photographer_section");
        //instanciation de l'API avec l'URL en paramètre
        this.photographersApi = new Api(`./data/photographers.json`)
    }
    async main() {
        //sélection des données spécifiques aux photographes
        const photographersData = await this.photographersApi.getPhotographers()
        // pour chaque photographe: création de sa propre carte descriptive 
        photographersData.forEach(photographe => {
            const Template = new photographerCard(photographe)
            this.$photographersSection.appendChild(Template.createPhotographeCard())
        })
    }
}
const app = new App()
app.main()