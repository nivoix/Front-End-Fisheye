import { mediasCard } from "../template/mediasCard.js"

const photosSection = document.querySelector('.photosSection')

function renderMediaCard(photographMediaSelected) {
    photographMediaSelected.forEach((media) => {
        const Template = new mediasCard(media)
        photosSection.appendChild(Template.createMediasCard())
    })
}
export { renderMediaCard }