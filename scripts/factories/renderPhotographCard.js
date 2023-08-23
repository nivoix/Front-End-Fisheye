const photographSection = document.querySelector(".photograph-header")

function renderPhotographCard(photographeSelected) {
    photographeSelected.forEach(photographdata => {
        const Template = new photographCard(photographdata)
        photographSection.appendChild(Template.createPhotographCard())
    })
}