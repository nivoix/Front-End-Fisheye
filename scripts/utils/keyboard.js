

// activation de la fermeture de la modal lors de la pression du bouton ENTER
const buttonClose = document.querySelectorAll('.btn_close')

for(let i = 0; i < buttonClose.length; i++) {
    buttonClose[i].onkeydown = (e) => {
        if (e.keyCode === 13) {
            // The Enter/Return key
            document.activeElement.onclick();
        }
    }    
}


/* function keypressOption(data) {
    const select =document.querySelector('select')
    const options = document.querySelector('select option')
    options.addEventListener('keydown', (e) => {
        e.preventDefault()
        if(e.keyCode === 13){
            filterOption(data, e)
        }
    })
} */

function keypressImages() {
    const images =document.querySelectorAll('.cardPhotos .cardImg ')
    for(let a = 0; a< images.length; a++) {
        images[a].addEventListener('keydown', (e) => {
            if(e.keyCode === 13) {
                console.log(images[a].id)
                displayLightBoxModal(images[a].id);
            }
        })
    }
}


function keypressHeart(data) {

    let cardLikes = document.querySelector('h5 span')
    let likesdata = []
    //on récupère les likes de chaque image pour les mettre dans un tableau--> likes venant de la *******   DB   **********
    for(let i = 0 ; i < data.length; i++) {
        likesdata.push(data[i].likes)
    }
    const allEmptyheart = document.querySelectorAll('.cardText')
    Array.from(allEmptyheart).forEach((emptyheart, indexheart) => {
        emptyheart.addEventListener('keydown', (e) => {
            console.log('suis la?????,');
            if(e.keyCode === 13) {
                console.log("puis ici");
                const heartsEmpty = document.querySelectorAll('.nblikes')
                // condition si like ou dislike
                if((heartsEmpty[indexheart].value) == (likesdata[indexheart])){
                    like(indexheart, heartsEmpty)
                    changeTotalLikes(cardLikes)
                    
                }else if(heartsEmpty[indexheart].value > likesdata[indexheart]){
                    disLike(indexheart,heartsEmpty)
                    changeTotalLikes(cardLikes)
                }
            }
        })
    })
}

