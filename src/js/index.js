const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();
    personagem.classList.add("selecionado");

    //alterar imagem
    alterarImagemPersonagemSelecionado(personagem);

    //alterar nome
    alterarNomePersonagemSelecionado(personagem);

    //alterar descricao
    alterarDescricaoPersonagemSelecionado(personagem);
  });
});

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `../../src/assets/img/card-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}
function alterarDescricaoPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}
