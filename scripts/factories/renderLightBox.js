import { lightBoxModal } from "../template/lightBoxModal.js"


const photosSectionLightBox = document.querySelector('.boxmedia')

function renderLightBox (allDataOnePhotograph) {
    allDataOnePhotograph.forEach((media, count) => {
        const Template = new lightBoxModal(media)
        photosSectionLightBox.appendChild(Template.createLightBoxModal(count))
    })
}
export { renderLightBox }