const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    const imagemPersonagemGrande = document.querySelector(".personagem-grande");

    //alterar imagem
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `../../src/assets/img/card-${idPersonagem}.png`;

    //alterar nome
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    //alterar descricao
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
  });
});
