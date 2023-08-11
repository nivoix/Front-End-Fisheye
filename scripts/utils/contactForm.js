const modal = document.getElementById("contact_modal");
const areamodal = document.querySelector('.modal')
//fonction d'ouverture de la modal de contact
function displayModal() {
	modal.style.display = "block";
    modal.setAttribute("aria-hidden", false)
}
// fonction de fermeture de la modal de contact
function closeModal() {
    /* const modal = document.getElementById("contact_modal"); */
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", true);
    pagecontent.style.visibility = "visible"
}

// ecoute du bouton pour ouvrir la modal et masquer le reste de la page
const openModal = document.querySelector(".photograph-header button")
const pagecontent = document.querySelector("main")
openModal.addEventListener("click", () => {
    pagecontent.style.visibility = "hidden"
    displayModal()
})

// fonction de récupération de la saisie lors de la soumission du formulaire
const sendModal = document.querySelector("form button")
const uservalue = document.getElementById('prénom')
sendModal.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
})

//fonction de contrôle de l'input
const regexprénom = /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
const msgprénom = "Chiffres et symboles interdits. Minimum 2 caractères.";
const form = document.querySelector('.form')
const errormsg = document.createElement('div')
const value = uservalue.value
form.appendChild(errormsg)
function checkInput() {
    if(regexprénom.test(uservalue.value)){
        uservalue.setAttribute("aria-invalid", false)
        uservalue.style.border="4px solid green";
        errormsg.textContent= "\u2705"
        errormsg.style.color="green"
        areamodal.style.backgroundColor="#DB8876"
        console.log(uservalue.value);
    }else{
        console.log(uservalue);
        errormsg.textContent= msgprénom
        errormsg.style.color="red"
        uservalue.style.border="4px solid #e54858";
        uservalue.setAttribute("aria-invalid", true)
        areamodal.style.backgroundColor="#c4c4c4"
        areamodal.style.border="4px solid red"
        uservalue.style.color="red";
    }
}