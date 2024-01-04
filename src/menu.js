function createMenuContent() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const coffeeImages = [
    "../src/assets/cafe-1.jpg",
    "../src/assets/cafe-2.jpg",
    "../src/assets/cafe-3.jpg",
    "../src/assets/cafe-4.jpg",
    "../src/assets/cafe-5.jpg",
    "../src/assets/cafe-6.jpg"
  ];
  
  
  const coffeList = [
    "Capuccino",
    "Americano",
    "Café Espectral",
    "Capuccino de Maçã",
    "Mocha",
    "Pingado"
  ];

  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menu.appendChild(menuItem);

    const menuItemImg = document.createElement("img");
    menuItemImg.src = coffeeImages[i]; 
    menuItemImg.classList.add("menu-item-img");
    menuItem.appendChild(menuItemImg);
    
    const coffeeName = document.createElement("h2");
    coffeeName.textContent = coffeList[i];
    menuItem.appendChild(coffeeName);
  }

  return menu;
}

function loadAbout() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenuContent());
}

export default loadAbout;
