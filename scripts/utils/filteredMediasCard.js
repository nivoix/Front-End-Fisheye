import { renderMediaCard } from "../factories/renderMediasCard.js"
import { checkIdImageSelected } from "./indeximageSelected.js"
import { totalLikes } from "./counterLikes.js"
import { keypressImages, keypressHeart } from "./keyboard.js"

const selected = document.querySelector('select')


async function filterOption(datas) {
    selected.addEventListener('change', (e) => {
        //classement par popularité
        if(e.target.value === "popularité") {
            // du plus pop au moins pop   
            datas.sort((a, b) => b.likes - a.likes)
        //classement par date
        }else if(e.target.value === "date") {
            // du plus recent au plus ancien
            datas.sort((a, b) => new Date(b.date) - new Date(a.date))
        //classement alphabétique des titres    
        }else if(e.target.value === "titre"){
            datas.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                }
                if (a.title > b.title) {
                    return 1
                }
                return 0
            });
        }
        // après la sélection de l'option de tri
        ///////// il faut supprimer tous les container "articles"
        let articles = document.querySelectorAll('.cardPhotos')
        Array.from(articles).forEach(articl => {
            articl.remove()
        });
        //////// il faut supprimer le total de like afin qu'il ne s'affiche pas en double
        let likeTotal =document.querySelector('.nbLikesTotal')
        likeTotal.remove()
        /////// il faut re-render les card
        renderMediaCard(datas)
        /////// il faut retrouver l'index de l'image sélectionnée
        checkIdImageSelected()
        /////// il faut re-calculer le total des likes
        totalLikes(datas)
        keypressImages()
        keypressHeart(datas)
    })
}
export { filterOption }
    