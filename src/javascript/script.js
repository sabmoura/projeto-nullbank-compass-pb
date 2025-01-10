let navBarToHome = document.getElementById("navbar-link-inicio");
let navBarToForYou = document.getElementById("navbar-link-paravoce");
let navBarToServices = document.getElementById("navbar-link-servicos");
let navBarToContact = document.getElementById("navbar-link-contato");
let navBarToSignUp = document.getElementById("navbar-link-cadastro");

navBarMenuList = [
    navBarToHome,
    navBarToForYou,
    navBarToServices,
    navBarToContact,
    navBarToSignUp
]

function setActiveToLink(Element){
    Element.classList.replace('.navbar__link', '.navbar__link--active');
}

function removeActiveFromLink(Element){
    Element.classList.remove('.navbar__link--active', '.navbar__link');
}

window.addEventListener('load', setActiveToLink(navBarToHome));

for (let i = 0; i < navBarMenuList; i++) {
    navBarMenuList[i].addEventListener("click", setActiveToLink(navBarMenuList[i]));
}

// document.querySelector(".navbar__link--active").id

