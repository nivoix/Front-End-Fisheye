function checkIdImageSelected() {
    const images = document.querySelectorAll('.cardPhotos')
    Array.from(images).forEach((image) => {
        image.addEventListener('click', () => {
            let id = image.id
            displayLightBoxModal(id);
        })
    })
}

