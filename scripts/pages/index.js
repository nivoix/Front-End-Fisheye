class App {
    constructor() {
    this.$photographersSection = document.querySelector(".photographer_section");

    this.photographersApi = new PhotographerApi(`./data/photographers.json`)
    }

    async main() {
        const photographersData = await this.photographersApi.get()
        const Photographers = photographersData.map(photographe => new photographersFactory(photographe, 'photographers'))
    
        Photographers.forEach(photographe => {
            const Template = new photographerCard(photographe)
            this.$photographersSection.appendChild(Template.createPhotographeCard())
        })
    }
}

const app = new App()
app.main()


/* async function getPhotographers() {
    let dataPhotographers = []
    await fetch("./data/photographers.json")
            .then(reponse => reponse.json())
            .then((data) => {
                dataPhotographers = data.photographers
            })
            .catch((error) => error)
    
    return  ({photographers:[...dataPhotographers]})
        
} */

/* async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const userCardDOM = getUserCardDOM(photographer);
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const  {photographers}  = await getPhotographers();
    displayData(photographers);
}

init(); */

