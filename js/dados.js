class Dados {
  constructor() {
    this.data = [
      {
        name: "Googlifier",
        description:
          "Extensão do Chrome que adiciona olhos engraçados a todas as imagens no navegador.",
        stars: "500+",
        language: "JavaScript",
        html_url: "https://github.com/SteveWozniak/googlifier",
      },
      {
        name: "Catalytics",
        description:
          "Substitui os gráficos de pessoas no Google Analytics por imagens de gatos mal-humorados.",
        stars: "300+",
        language: "JavaScript",
        html_url: "https://github.com/catalytics/cat-analytics",
      },
      {
        name: "Cloud-to-Butt",
        description:
          "Uma extensão divertida que substitui a palavra 'cloud' por 'butt' em páginas da web.",
        stars: "2.5k",
        language: "JavaScript",
        html_url: "https://github.com/panicsteve/cloud-to-butt",
      },
      {
        name: "Reactive Resume",
        description:
          "Construtor de currículos open-source, altamente personalizável e seguro.",
        stars: "17k",
        language: "ReactJS",
        html_url: "https://github.com/AmruthPillai/Reactive-Resume",
      },
      {
        name: "RoomGPT",
        description:
          "IA que transforma fotos de uma sala em uma versão projetada por você.",
        stars: "10k",
        language: "TypeScript",
        html_url: "https://github.com/Nutlope/roomGPT",
      },
      {
        name: "CopilotKit",
        description: "Ferramenta para criar copilotos de IA 10x mais rápido.",
        stars: "1k",
        language: "TypeScript",
        html_url: "https://github.com/CopilotKit/CopilotKit",
      },
      {
        name: "Mermaid",
        description:
          "Gera diagramas de fluxo e sequência a partir de texto em markdown.",
        stars: "64k",
        language: "JavaScript",
        html_url: "https://github.com/mermaid-js/mermaid",
      },
      {
        name: "Docusaurus",
        description:
          "Ferramenta para criação e manutenção de sites de documentação open-source.",
        stars: "50k",
        language: "ReactJS",
        html_url: "https://github.com/facebook/docusaurus",
      },
      {
        name: "Spam Website Opener",
        description:
          "Abre sites aleatórios em intervalos ajustáveis para diversão.",
        stars: "300",
        language: "Python",
        html_url: "https://github.com/shankypedia/Spam-Website-Opener",
      },
      {
        name: "IIITB-Hogwarts",
        description:
          "Simula a seleção de casas de Harry Potter para alunos universitários.",
        stars: "9",
        language: "Dart",
        html_url: "https://github.com/kartik-pant-23/IIITB-Hogwarts",
      },
      {
        name: "Vacation Planner",
        description:
          "Aplicativo que ajuda a planejar rotas de viagens com base no tempo e orçamento.",
        stars: "12",
        language: "Go",
        html_url: "https://github.com/timwangmusic/Vacation-Planner",
      },
      {
        name: "Frequency Composer",
        description: "Altera frequências de som para compor músicas simples.",
        stars: "12",
        language: "C",
        html_url: "https://github.com/jaladh-singhal/frequency-composer",
      },
      {
        name: "Aim Lab TS",
        description:
          "Jogo de mira personalizável feito em TypeScript para treino de precisão.",
        stars: "10",
        language: "TypeScript",
        html_url: "https://github.com/Ali-Sdg90/Aim-Lab-TS",
      },
      {
        name: "Doodle Critic",
        description:
          "Rede neural que avalia seus desenhos enquanto você rabisca.",
        stars: "9",
        language: "JavaScript, Python",
        html_url: "https://github.com/jtiscione/doodlecritic",
      },
      {
        name: "Wildfire Tracker",
        description: "Aplicação para rastrear incêndios usando a API da NASA.",
        stars: "800",
        language: "ReactJS",
        html_url: "https://github.com/YourRepo/Wildfire-Tracker",
      },
      {
        name: "Netflix Clone",
        description: "Clone do Netflix usando React e Firebase.",
        stars: "2k",
        language: "ReactJS",
        html_url: "https://github.com/YourRepo/Netflix-Clone",
      },
      {
        name: "Dice Roll Generator",
        description: "Simula o lançamento de um ou dois dados.",
        stars: "100",
        language: "Python",
        html_url: "https://github.com/YourRepo/Dice-Roll-Generator",
      },
      {
        name: "Password Strength Checker",
        description: "Verifica a força de uma senha com base em seu conteúdo.",
        stars: "1k",
        language: "Python",
        html_url: "https://github.com/YourRepo/Password-Strength-Checker",
      },
      {
        name: "Blitz",
        description: "Ferramenta fullstack para Next.js.",
        stars: "4k",
        language: "JavaScript",
        html_url: "https://github.com/blitz-js/blitz",
      },
      {
        name: "Facebook Clone",
        description: "Clone do Facebook usando ReactJS e Firebase.",
        stars: "2k",
        language: "ReactJS",
        html_url: "https://github.com/YourRepo/Facebook-Clone",
      },
      {
        name: "Signal Clone",
        description: "Clone do Signal com chat criptografado.",
        stars: "1.5k",
        language: "ReactJS",
        html_url: "https://github.com/YourRepo/Signal-Clone",
      },
      {
        name: "Full-Stack NFT Marketplace",
        description: "Marketplace de NFTs com Ethereum e Next.js.",
        stars: "5k",
        language: "Solidity, Next.js",
        html_url: "https://github.com/YourRepo/NFT-Marketplace",
      },
      {
        name: "E-Commerce App",
        description: "Aplicativo de e-commerce usando MongoDB e Next.js.",
        stars: "3k",
        language: "JavaScript",
        html_url: "https://github.com/YourRepo/E-Commerce-App",
      },
      {
        name: "Google Drive Clone",
        description: "Clone do Google Drive usando React e Firebase.",
        stars: "1k",
        language: "ReactJS",
        html_url: "https://github.com/YourRepo/Google-Drive-Clone",
      },
      {
        name: "Instagram Clone",
        description: "Clone do Instagram com React e Firebase.",
        stars: "3k",
        language: "ReactJS",
        html_url: "https://github.com/YourRepo/Instagram-Clone",
      },
    ];
  }

  searchRepositories(term) {
    const lowerTerm = term.toLowerCase(); // Convertendo termo de busca para minúsculo

    return this.data.filter((repo) => 
      repo.name.toLowerCase().includes(lowerTerm) ||
      repo.description.toLowerCase().includes(lowerTerm) ||
      repo.stars.toLowerCase().includes(lowerTerm) ||
      repo.language.toLowerCase().includes(lowerTerm) ||
      repo.html_url.toLowerCase().includes(lowerTerm)
    );
  }
}
