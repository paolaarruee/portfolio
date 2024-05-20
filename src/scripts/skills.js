const cardsData = [
  { texto: "HTML", imagem: "./assets/img/skills/html5.png" },
  { texto: "CSS3", imagem: "./assets/img/skills/css3.png" },
  { texto: "JavaScript", imagem: "./assets/img/skills/javascript.png" },
  { texto: "TypeScript", imagem: "./assets/img/skills/typescript.png" },
  { texto: "Material UI", imagem: "./assets/img/skills/material-ui.png" },
  { texto: "Bootstrap", imagem: "./assets/img/skills/bootstrap.png" },
  { texto: "SASS", imagem: "./assets/img/skills/sass.png" },
  {
    texto: "Styled Components",
    imagem: "./assets/img/skills/styled-components.png",
  },
  { texto: "Angular", imagem: "./assets/img/skills/angular.png" },
  { texto: "React.js", imagem: "./assets/img/skills/react.png" },
  { texto: "Node.Js", imagem: "./assets/img/skills/nodejs.png" },
  { texto: "Java", imagem: "./assets/img/skills/java.png" },
  { texto: "Spring Boot", imagem: "./assets/img/skills/spring-boot.png" },
  { texto: "Jest", imagem: "./assets/img/skills/jest.png" },
  { texto: "Figma", imagem: "./assets/img/skills/figma.png" },
];

function criarCards() {
  const container = document.getElementById("cards-container");

  cardsData.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const imagem = document.createElement("img");
    imagem.classList.add("image");
    imagem.src = card.imagem;
    cardDiv.appendChild(imagem);

    container.appendChild(cardDiv);
  });
}

const cardsProject = [
  {
    texto: "Gerenciador de Sessões de Votação",
    imagem: "./assets/img/votacao.png",
    descricao:
      "Back-end com autenticação para um gerenciador de votações com node.js e express",
    github: "https://github.com/paolaarruee/desafio-back-DB",
    logo: "fa-github",
  },
  {
    texto: "Dragopédia",
    imagem: "./assets/img/dragopedia.png",
    descricao: "Front-end de cadastro de dragões com autenticação",
    github: "https://github.com/paolaarruee/Dragopedia",
    logo: "fa-github",
  },
  {
    texto: "Aprendendo Inglês",
    imagem: "./assets/img/aprendendoingles.png",
    descricao: "Jogo feito no curso de Angular",
    github: "https://github.com/paolaarruee/Curso-Angular-com-ES6",
    logo: "fa-github",
  },
  {
    texto: "Gestor de Eventos",
    imagem: "./assets/img/gestor-eventos.jpg",
    descricao: "Sistema para listagem e cadastro de pessoas em eventos ",
    github: "https://github.com/paolaarruee/TesteNivelamentoDEV1",
    logo: "fa-github",
  },
];

function criarCardsProject() {
  const container = document.getElementById("cards-project");

  cardsProject.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-project");

    cardDiv.style.backgroundImage = `url('${card.imagem}')`;
    const overlay = document.createElement("div");
    overlay.classList.add("card-overlay");
    cardDiv.appendChild(overlay);

    const texto = document.createElement("p");
    texto.classList.add("description-project");
    texto.textContent = card.texto;
    cardDiv.appendChild(texto);

    const githubLink = document.createElement("a");
    githubLink.classList.add("github-link");
    githubLink.href = card.github;
    githubLink.target = "_blank";

    const githubLogo = document.createElement("i");

    githubLogo.classList.add("fa-brands", card.logo, "github-logo");
    githubLink.appendChild(githubLogo);
    cardDiv.appendChild(githubLink);

    container.appendChild(cardDiv);
  });
}

window.onload = function () {
  criarCardsProject();
  criarCards();
};
