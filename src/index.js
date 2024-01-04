import "./style.css";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("header");
    header.id = "header";
    header.appendChild(createNavbar());
    return header;
}

function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.id = "navbar";

    const sectionsData = [
        { id: "about", title: "SOBRE" },
        { id: "menu", title: "MENU" },
        { id: "contact", title: "CONTATO" },
    ];

    sectionsData.forEach(section => {
        const tabButton = document.createElement('button');
        tabButton.className = 'nav-link';
        tabButton.textContent = section.title;
        tabButton.dataset.tab = section.id; 
        tabButton.classList.add('tablink'); 
        navbar.appendChild(tabButton);
        tabButton.addEventListener('click', () => {
            loadSection(section.id);
        });
    });

    return navbar;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.id = "main"; 
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.innerHTML = "<p>Todos os direitos reservados ©</p>";    
    return footer;
}

function loadSection(id) {
     switch (id) {
        case "about":
            loadAbout()
            break;
        case "menu":
            loadMenu()
            break;
        case "contact":
            loadContact()
            break;
    }
 }

function main() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadAbout()
}

document.addEventListener("DOMContentLoaded", main);
