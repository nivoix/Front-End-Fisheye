function checkIndexImageSelected() {
    const images = document.querySelectorAll('.cardPhotos .lightBox .cardImg ')
    
        Array.from(images).forEach((image, index) => {
            image.addEventListener('click', () => {
                displayLightBoxModal(index);
            })
        })
    }