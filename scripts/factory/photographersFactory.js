class photographersFactory {
    constructor(data, type) {
        if (type === 'photographersindex'){
            return new photographersModel(data)
        } else if(type === 'photographers'){
            return new photographModel(data)
        } else {
            throw 'type de donnée inconnu'
        }
        
    }
}
