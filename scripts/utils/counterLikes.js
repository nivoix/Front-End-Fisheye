let likes = []



function totalLikes (data) {
    const displayTotalLike = document.querySelector('h5')
    const cardLikes = document.createElement('span')
    cardLikes.className = "nbLikesTotal"
    displayTotalLike.appendChild(cardLikes)
    
    //on récupère les likes de chaque image pour les mettre dans un tableau
    const allPictureLikes = document.querySelectorAll('.nblikes')
    // on affiche le nombre total de like sur la page
    for(let n=0; n<allPictureLikes.length; n++){
        likes.push(allPictureLikes[n].value)
    }
    // on additionne tous les likes du tableau
    const nbLikesTotal =  likes.reduce((a,c) => a+c, 0)
    console.log(nbLikesTotal);
    cardLikes.textContent = nbLikesTotal 
    


    //on récupère tous les coeurs vides de la page
    const allEmptyheart = document.querySelectorAll('.cardText')
    //on créé un tableau avec les coeurs et pour chacun d'entre eux on écoute le clic
    // qui permet de définir l'index du coeur sélectionné.
    Array.from(allEmptyheart).forEach((emptyheart, indexheart) => {
        emptyheart.addEventListener('click', () => {
            const heartsEmpty = document.querySelectorAll('.nblikes')
            console.log(heartsEmpty[indexheart].textContent);
            console.log(heartsEmpty[indexheart]);
            if((heartsEmpty[indexheart].value) == (likes[indexheart])){
                like(indexheart, heartsEmpty)
            }else if(heartsEmpty[indexheart].value > likes[indexheart]){
                console.log("je suis la");
                disLike(indexheart,heartsEmpty)
            }
        })
    })
    function like(indexheart, heartsEmpty) {
        let likeValue = heartsEmpty[indexheart].value
        console.log(likeValue);
        // incrémentation du nombre de likes du coeur avec l'index concerné
        let newValueHeart = likeValue+1
        // envoi de la nouvelle valeur en affichage
        heartsEmpty[indexheart].textContent = newValueHeart;
        heartsEmpty[indexheart].value = newValueHeart;
        const heart = document.querySelectorAll('.cardText .heart')
        const heartselect = heart[indexheart]
        heartselect.setAttribute('src', './assets/heart-solid.svg')
        console.log(likeValue);

            
    }


    function disLike(indexheart, heartsEmpty) {
        let likeValue = heartsEmpty[indexheart].value
        console.log(likeValue);
        // incrémentation du nombre de likes du coeur avec l'index concerné
        let newValueHeart = likeValue-1
        console.log(newValueHeart);
        // envoi de la nouvelle valeur en affichage
        heartsEmpty[indexheart].textContent = newValueHeart;
        heartsEmpty[indexheart].value = newValueHeart;
        const heart = document.querySelectorAll('.cardText .heart')
        const heartselect = heart[indexheart]
        heartselect.setAttribute('src', './assets/heart-regular.svg')
    }

}
