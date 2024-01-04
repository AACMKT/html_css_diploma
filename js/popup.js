const mobileMenu = document.querySelector("#mobile-menu");
const contacts = document.querySelector("#contacts");
const popup = document.querySelector(".popup-container");
const popupClose = document.querySelector(".popup__close-btn");

function showPopup (e) {
    e.preventDefault()
    popup.classList.add("popup-active");
};

function hidePopup (e) {
    e.preventDefault()
    popup.classList.remove("popup-active");
}



mobileMenu.addEventListener('click', e => showPopup(e));
contacts.addEventListener('click', e => showPopup(e));
popupClose.addEventListener('click', e => hidePopup(e));