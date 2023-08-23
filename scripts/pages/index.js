import { Api } from "../api/api.js";
import { renderPhotographInfoCard } from "../factories/renderPhotographInfoCard.js";
class App {
    constructor() {
        //instanciation de l'API avec l'URL en paramètre
        this.photographersApi = new Api(`./data/photographers.json`)
        
    }
    async main() {
        //sélection des données spécifiques aux photographes
        const photographersData = await this.photographersApi.getPhotographers()
        // rendu de toutes les cartes d'info sur les photographes
        renderPhotographInfoCard(photographersData)
    }
}
const app = new App()
app.main()