class photographersFactory {
    constructor(data, type) {
        if (type === 'photographers'){
            return new photographersModel(data)
        } else {
            throw 'type de donnée inconnu'
        }

    }
}

 //rendu de la carte d'un photographe
async function photographerFactory(data) {
    
    getUserCardDOM(data);

    return { getUserCardDOM }
}