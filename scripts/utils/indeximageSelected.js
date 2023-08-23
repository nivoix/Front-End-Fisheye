function checkIdImageSelected() {
    const images = document.querySelectorAll('.cardPhotos .cardImg')
    Array.from(images).forEach((image) => {
        image.addEventListener('click', () => {
            let id = image.id
            displayLightBoxModal(id);
        })
    })
}