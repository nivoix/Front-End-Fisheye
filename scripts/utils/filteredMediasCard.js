/* selected = document.querySelector('select')
console.log(selected); */


function filterOption(datas, e) {
            if(e.target.value === "popularité") {
                console.log('je suis pop');    
                datas.sort((a, b) => b.likes - a.likes);
            }else if(e.target.value === "date") {
                console.log('je suis date')
                datas.sort((a, b) => new Date(a.date)- new Date(b.date));
            }else if(e.target.value === "titre"){
                console.log('je suis titre')
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
            articles = document.querySelectorAll('.cardPhotos')
            Array.from(articles).forEach(articl => {
                articl.remove()
            });
            likeTotal =document.querySelector('.nbLikesTotal')
            likeTotal.remove()
            renderMediaCard(datas)
            checkIndexImageSelected()
            totalLikes(datas)
    
}
    
