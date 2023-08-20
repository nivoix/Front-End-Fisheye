const photosSection = document.querySelector('.photosSection')


function renderMediaCard(photographMediaSelected) {
    console.log(photographMediaSelected);
    photographMediaSelected.forEach((media) => {
            Template = new mediasCard(media)
            photosSection.appendChild(Template.createMediasCard())
    })
}  