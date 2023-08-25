// gestion du total de like du photographe venant de la DB 
//et de chaque photo
function totalLikes (data) {
    const displayTotalLike = document.querySelector('h5')
    const cardLikes = document.createElement('span')
    cardLikes.className = "nbLikesTotal"
    displayTotalLike.appendChild(cardLikes)
    let likesdata = []
    //on récupère les likes de chaque image pour les mettre dans un tableau--> likes venant de la **  DB ****
    for(let i = 0 ; i < data.length; i++) {
        likesdata.push(data[i].likes)
    }
    // on additionne tous les likes du tableau
    const nblikesDataTotal = likesdata.reduce((a,c) => a+c, 0)
    // on affiche le nombre total de like sur la page
    cardLikes.textContent = nblikesDataTotal
    totalLikesCard(likesdata, cardLikes)
    // gestion de la selection de l'image par le keyboard
}
export { totalLikes }

function totalLikesCard(likesdata, cardLikes) {
    //on récupère tous les coeurs vides de la page contenu dans "cardText"
    const allEmptyheart = document.querySelectorAll('.cardText')
    //on créé un tableau avec les coeurs et pour chacun d'entre eux on écoute le clic
    // qui permet de définir l'index du coeur sélectionné.
    Array.from(allEmptyheart).forEach((emptyheart, indexheart) => {
        emptyheart.addEventListener('click', () => {
            const heartsEmpty = document.querySelectorAll('.nblikes')
            // condition si like ou dislike
            if((heartsEmpty[indexheart].value) === (likesdata[indexheart])){
                like(indexheart, heartsEmpty)
                changeTotalLikes(cardLikes)
            }else if(heartsEmpty[indexheart].value > likesdata[indexheart]){
                disLike(indexheart,heartsEmpty)
                changeTotalLikes(cardLikes)
            }
        })
    })
}
export { totalLikesCard }

function like(indexheart, heartsEmpty) {
    let likeValue = heartsEmpty[indexheart].value
    // incrémentation du nombre de likes du coeur avec l'index concerné
    let newValueHeart = likeValue+1
    // envoi de la nouvelle valeur en affichage
    heartsEmpty[indexheart].textContent = newValueHeart
    heartsEmpty[indexheart].value = newValueHeart
    // Changement du coeur vide en plein
    const heart = document.querySelectorAll('.cardText .heart')
    const heartselect = heart[indexheart]
    heartselect.setAttribute('src', './assets/heart-solid.svg')            
}
export { like }

function disLike(indexheart, heartsEmpty) {
    let likeValue = heartsEmpty[indexheart].value
    // incrémentation du nombre de likes du coeur avec l'index concerné
    let newValueHeart = likeValue-1
    // envoi de la nouvelle valeur en affichage
    heartsEmpty[indexheart].textContent = newValueHeart
    heartsEmpty[indexheart].value = newValueHeart
    // changement du coeur plein en vide
    const heart = document.querySelectorAll('.cardText .heart')
    const heartselect = heart[indexheart]
    heartselect.setAttribute('src', './assets/heart-regular.svg')
}
export { disLike }

// incrémentation du total de like de la page
function changeTotalLikes(cardLikes) {
    let likes = []
    //on récupère les likes de chaque image --> likes venant de la ******   page   ***********
    const allPictureLikes = document.querySelectorAll('.nblikes')
    // pour les mettre dans un tableau 
    for(let n=0; n<allPictureLikes.length; n++){
        likes.push(allPictureLikes[n].value)
    }
    // on additionne tous les likes du tableau
    const nbLikesTotal =  likes.reduce((a,c) => a+c, 0)
    // on affiche le nombre total de like sur la page
    return cardLikes.textContent= nbLikesTotal
}
export { changeTotalLikes }