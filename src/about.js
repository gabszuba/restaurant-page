function createAboutContent() {
  const wrapperText = document.createElement("div");
  wrapperText.classList.add("text-wrapper");

  const welcomeMsg = document.createElement("h2");
  welcomeMsg.textContent = "Bem-vindos ao";
  wrapperText.appendChild(welcomeMsg);

  const h1 = document.createElement("h1");
  h1.textContent = "Vale do Café";
  wrapperText.appendChild(h1);

  const paragraph = document.createElement("p");
  paragraph.textContent = `Localizado no coração da cidade, o Vale do café é um oásis de aromas
    e sabores que encanta os sentidos. Possuímos uma atmosfera acolhedora
    e um ambiente aconchegante, com uma ampla variedade de cafés exóticos
    e tradicionais, além de uma seleção de delícias gastronômicas. Combinando qualidade,
    sabor e um ambiente encantador, o Vale do café é mais do que uma
    simples cafeteria - é uma experiência.`;
  wrapperText.appendChild(paragraph);

  const linkLearnMore = document.createElement("a");
  linkLearnMore.classList.add("learn-more");
  linkLearnMore.href = "#";
  linkLearnMore.textContent = "RESERVE UMA MESA";
  wrapperText.appendChild(linkLearnMore);

  return wrapperText;
}

function imgContent() {
  const element = document.createElement("div");
  element.classList.add("img-container");

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  return element;
}

function loadAbout() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createAboutContent());
  main.appendChild(imgContent());
}

export default loadAbout;
