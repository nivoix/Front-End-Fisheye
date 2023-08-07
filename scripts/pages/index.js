    async function getPhotographers() {
        
        let dataPhotographers = []
        await fetch("./data/photographers.json")
                .then(reponse => reponse.json())
                .then((data) => {
                    dataPhotographers = data.photographers
                })
                .catch((error) => error)
        
        return  ({photographers:[...dataPhotographers]})
            
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const  {photographers}  = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
