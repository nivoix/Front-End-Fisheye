
function totalLikes (data) {
    const displayTotalLike = document.querySelector('h5')
    const cardLikes = document.createElement('span')
    cardLikes.className = "nbLikesTotal"
    displayTotalLike.appendChild(cardLikes)
    let likes = []
    
    //on récupère les likes de chaque image pour les mettre dans un tableau
    // on affiche le nombre total de like sur la page
    function addTotalLikes() {
        const allPictureLikes = document.querySelectorAll('.nblikes')
        for(let n=0; n<allPictureLikes.length; n++){
            likes.push(allPictureLikes[n].value)
        }
        // on additionne tous les likes du tableau
        const nbLikesTotal =  likes.reduce((a,c) => a+c, 0)
        console.log(nbLikesTotal);
        cardLikes.textContent = nbLikesTotal 
    }
    addTotalLikes()
    //on récupère tous les coeurs vides de la page
    const heartsEmpty = document.querySelectorAll('.nblikes')
    
    //on créé un tableau avec les coeurs et pour chacun d'entre eux on écoute le clic
    // qui permet de définir l'index du coeur sélectionné.
    Array.from(heartsEmpty).forEach((emptyheart, indexheart) => {
        emptyheart.addEventListener('click', () => {
            console.log(heartsEmpty[indexheart]);
            

            if((heartsEmpty[indexheart].value) == (likes[indexheart])){
                like(indexheart)
            }else if(heartsEmpty[indexheart].value > likes[indexheart]){
                console.log("je suis la");
                disLike(indexheart)
            }
        })
    })
    function like(indexheart) {
       
                // incrémentation du nombre de likes du coeur avec l'index concerné
                let newValueHeart = heartsEmpty[indexheart].value+1
                console.log(newValueHeart);
                // envoi de la nouvelle valeur en affichage
                heartsEmpty[indexheart].textContent = newValueHeart;
                heartsEmpty[indexheart].value = newValueHeart;

            
    }
    like()

    function disLike(indexheart) {
                // incrémentation du nombre de likes du coeur avec l'index concerné
                let newValueHeart = heartsEmpty[indexheart].value-1
                console.log(newValueHeart);
                // envoi de la nouvelle valeur en affichage
                heartsEmpty[indexheart].textContent = newValueHeart;
                heartsEmpty[indexheart].value = newValueHeart;
    }
}

