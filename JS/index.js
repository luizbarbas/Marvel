/* 
Objetivo 1 - Quando passar o mouse pelo personagem temos que:
- colocar a classe selecionando no personagem ao passarmos o mouse em cima para adicionar animação nele
- retirar a classe selecionado do personagem que está selecionado

Objetivo 2 - Quando passar o moude em cima do personagem trocar a imagem e nome do personagem grande
- alternara imagem e o nome do jogador 1
*/

// Objetivo 1

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        // Objetivo 2

        const idSelecionado = personagem.attributes.id.value;
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;


    })
})



