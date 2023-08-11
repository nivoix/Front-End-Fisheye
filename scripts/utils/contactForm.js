function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    pagecontent.style.visibility = "visible"
}

const openModal = document.querySelector(".photograph-header button")
const pagecontent = document.querySelector("main")
openModal.addEventListener("click", () => {
    pagecontent.style.visibility = "hidden"
    displayModal()
})

const sendModal = document.querySelector("form button")
console.log(sendModal);