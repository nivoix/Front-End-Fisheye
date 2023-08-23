
function filterOption(datas, e) {
    //classement par popularité
    if(e.target.value === "popularité") {
        // du plus pop au moins pop   
        datas.sort((a, b) => b.likes - a.likes);
    //classement par date
    }else if(e.target.value === "date") {
        // du plus récent au plus ancien
        datas.sort((a, b) => new Date(a.date)- new Date(b.date));
    //classement alphabétique des titres    
    }else if(e.target.value === "titre"){
        datas.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        
    }

    
    // après la sélection de l'option de tri
    ///////// il faut supprimer tous les container "articles"
    articles = document.querySelectorAll('.cardPhotos')
    Array.from(articles).forEach(articl => {
        articl.remove()
    });
    //////// il faut supprimer le total de like afin qu'il ne s'affiche pas en double
    likeTotal =document.querySelector('.nbLikesTotal')
    likeTotal.remove()
    /////// il faut re-render les card
    renderMediaCard(datas)
    /////// il faut retrouver l'index de l'image sélectionnée
    checkIdImageSelected()
    /////// il faut re-calculer le total des likes
    totalLikes(datas)
    keypressImages()
    keypressHeart(datas)
}
    