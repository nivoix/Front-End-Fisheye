function checkIndexImageSelected() {
    const images = document.querySelectorAll('.cardPhotos .cardImg ')
    Array.from(images).forEach((image, index) => {
        image.addEventListener('click', () => {
            
            displayLightBoxModal(index);
        })
    })
}

