// Instanciando a classe Dados
const dados = new Dados();

const repoGrid = document.querySelector(".repo-grid");
const searchInput = document.getElementById("search-input");
const searchContainer = document.querySelector(".search-container");
const submitButton = document.querySelector(".submit");

// Variável para controlar a animação
let isMovedUp = false;

// Vinculando o evento de clique ao botão de envio
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  // Limpa os resultados anteriores
  repoGrid.innerHTML = "";

  if (!searchTerm) {
    searchInput.placeholder = "Por favor, insira um termo de pesquisa.";
    searchInput.value = "";  // Limpa o campo de texto
    return;
  }

  // Adiciona a classe para mover o search-container para cima apenas uma vez
  if (!isMovedUp) {
    searchContainer.classList.add("move-up");
    isMovedUp = true;
  }

  // Aguarda o término da animação antes de exibir os resultados
  setTimeout(() => {
    const featuredRepos = dados.searchRepositories(searchTerm);

    if (featuredRepos.length === 0) {
      searchInput.placeholder = "Nenhum repositório encontrado.";
      searchInput.value = "";  // Limpa o campo de texto
      return;
    }

    // Exibe os repositórios filtrados
    featuredRepos.forEach((repo, index) => {
      const repoCard = `
        <div class="repo-card column">
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p class="descricao">${repo.description}</p>
          <span class="language">${repo.language}</span>
          <span class="stars">★ ${repo.stars}</span>
        </div>
      `;

      const repoCardElement = document.createElement("div");
      repoCardElement.innerHTML = repoCard;
      const repoCardInnerElement = repoCardElement.firstElementChild;

      repoGrid.appendChild(repoCardInnerElement);

      setTimeout(() => {
        repoCardInnerElement.classList.add("show");
      }, 100 + index);
    });
    searchContainer.classList.remove("move-up");
  }, 500); // Delay ajustado para aguardar a animação da div subir
});