class App {
    constructor() {
    this.$photographersSection = document.querySelector(".photographer_section");

    this.photographersApi = new PhotographerApi(`./data/photographers.json`)
    }

    async main() {
        const photographersData = await this.photographersApi.get()
        const photographersDataAll = photographersData.photographers;
        const Photographers = photographersDataAll.map(photographe => new photographersFactory(photographe, 'photographersindex'))
        Photographers.forEach(photographe => {
            const Template = new photographerCard(photographe)
            this.$photographersSection.appendChild(Template.createPhotographeCard())
        })
    }
}

const app = new App()
app.main()

