import { closeLightBoxModal } from "./lightBox.js"

const modal = document.getElementById("contact_modal")
const pagecontent = document.querySelector("main")
export { pagecontent }

//fonction d'ouverture de la modal de contact
async function displayModal() {
    modal.style.display = "flex"
    modal.setAttribute("aria-hidden", false)
    pagecontent.setAttribute("aria-hidden", true)
    pagecontent.style.visibility = "hidden"
}
export { displayModal }
// fonction de fermeture de la modal de contact
function closeModal() {
    const theArtisteName = document.getElementById('theArtisteName')
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", true)
    pagecontent.style.visibility = "visible"
    pagecontent.setAttribute("aria-hidden", false)
    theArtisteName.remove()
}
export { closeModal }

function closeTheModal() {
    const buttonClose = document.querySelectorAll('.btn_close')
    buttonClose.forEach((button) => {
        button.addEventListener('click', (e) =>{
            if(e.target.id === "btn_close_contact") {
                closeModal()
            }else closeLightBoxModal()
        })
    })
}
export { closeTheModal }
//ouverture de la modal de contact
function openModalContactForm(photographeSelected) {
    const openModal = document.querySelector(".photograph-header button")
    const title = document.querySelector('.modal header h1')
    openModal.addEventListener("click", () => {
        displayModal(photographeSelected)
        title.insertAdjacentHTML('beforeend',`<div id="theArtisteName">${photographeSelected[0].name}</div>`)
    })
}
export { openModalContactForm }


// fonction de récupération de la saisie lors de la soumission du formulaire
const sendModal = document.querySelector("form button")
sendModal.addEventListener('click', (e) => {
    e.preventDefault()
    validateForm()
})
// fonction de verification du formulaire
function validateForm () {
    //création des constantes
    //regex
    const regexprenom = /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/
    const regexnom = /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/
    const regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/
    const regexmessage = /[\S]/
    //message d'erreur
    const msgprenom = "Chiffres et symboles interdits. Minimum 2 caractères."
    const msgnom = "Chiffres et symboles interdits. Minimum 2 caractères."
    const msgemail = `Veuillez indiquer une adresse email valide.`
    const msgmessage = "Minimum 2 caractères."
    //input de saisie
    const inputprenom = document.getElementById('prenom')
    const inputnom = document.getElementById('nom')
    const inputemail = document.getElementById('email')
    const inputmessage = document.getElementById('message')
    //valeur saisie
    const prenom = inputprenom.value
    const nom = inputnom.value;
    const email = inputemail.value
    const message = inputmessage.value
    //message validation    
    const msgvalidate = "\u2705"
    //fonction de controle des inputs
    function checkInput(regex, inputValue, input, msgerror, msgvalidate, inputError ) {
        if(regex.test(inputValue)){
            displayMessageValid( input, msgvalidate, inputError)
            return true
        }else{
            displayMessageError( input, msgerror, inputError)
            return false
        }
    }
    //fonction d'affichage du message validé et retrait du message d'erreur
    function displayMessageValid ( input, msgvalidate, inputError) {
        const infosaisie = document.querySelector(`.messageInfo` + input)
        inputError.toggleAttribute("aria-invalid", true)
        inputError.setAttribute("aria-invalid", false)
        inputError.style.border="4px solid green"
        infosaisie.textContent= msgvalidate
        infosaisie.style.color="green"
        infosaisie.style.backgroundColor = "transparent"
    }
    // fonction d'affichage du message d'erreur et retrait du message de validation
    function displayMessageError( input, msgerror, inputError) {
        const infosaisie = document.querySelector(`.messageInfo` + input)
        inputError.toggleAttribute("aria-invalid", false)
        inputError.setAttribute("aria-invalid", true)
        inputError.style.border="4px solid #e54858"
        infosaisie.textContent= msgerror
        infosaisie.style.color="white"
        infosaisie.style.backgroundColor = "red"
        infosaisie.style.width = "fit-content"
    }
    // fonction de validation complète du formulaire et récupération des données saisies
    function controlForm () {
        if(
            checkInput(regexprenom, prenom, "prenom", msgprenom, msgvalidate, inputprenom)
            && checkInput(regexnom, nom, "nom", msgnom, msgvalidate, inputnom)
            && checkInput(regexemail, email, "email", msgemail, msgvalidate, inputemail)
            && checkInput(regexmessage, message, "message", msgmessage, msgvalidate, inputmessage)
        ) {
            console.log({
                "prenom":prenom,
                "nom":nom,
                "email":email,
                "message":message
            });
        }
    }
    checkInput(regexprenom, prenom, "prenom", msgprenom, msgvalidate, inputprenom)
    checkInput(regexnom, nom, "nom", msgnom, msgvalidate, inputnom)
    checkInput(regexemail, email, "email", msgemail, msgvalidate, inputemail)
    checkInput(regexmessage, message, "message", msgmessage, msgvalidate, inputmessage)
    controlForm()
}