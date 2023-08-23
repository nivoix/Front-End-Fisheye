import { photographerCard } from "../template/photographersCard.js"

const photographersSection = document.querySelector(".photographer_section");

function renderPhotographInfoCard(photographersData) {
    photographersData.forEach(photographe => {
        const Template = new photographerCard(photographe)
        photographersSection.appendChild(Template.createPhotographeCard())
    })
}
export { renderPhotographInfoCard }