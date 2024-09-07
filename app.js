const buscaInput = document.getElementById('busca');
const resultadosDiv = document.getElementById('resultados');
const jogos = jogosESports; // Utilizando o array de jogos definido anteriormente

function pesquisa() {
    const termoBusca = buscaInput.value.toLowerCase();
    resultadosDiv.innerHTML = ''; // Limpa os resultados anteriores

    // Filtra os jogos que contém o termo da busca no nome ou nas tags
    const jogosFiltrados = jogos.filter(jogo => {
        return jogo.nome.toLowerCase().includes(termoBusca) ||
               jogo.tags.some(tag => tag.includes(termoBusca));
    });

    // Cria os elementos HTML para cada jogo encontrado
    jogosFiltrados.forEach(jogo => {
        const divJogo = document.createElement('div');
        divJogo.classList.add('resultado-jogo');

        const img = document.createElement('img');
        img.src = `imagem/${jogo.nome.replace(/\s+/g, '_').toLowerCase()}.png`; // Ajustar o caminho da imagem
        img.alt = jogo.nome;
        divJogo.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = jogo.nome;

        const pGenero = document.createElement('p');
        pGenero.textContent = `Gênero: ${jogo.genero}`;

        const pPlataforma = document.createElement('p');
        pPlataforma.textContent = `Plataforma: ${jogo.plataforma}`;

        const pDescricao = document.createElement('p');
        pDescricao.textContent = jogo.descricaoCurta;

        // Adicionando os elementos à div do jogo
        divJogo.appendChild(h3);
        divJogo.appendChild(pGenero);
        divJogo.appendChild(pPlataforma);
        divJogo.appendChild(pDescricao);

        resultadosDiv.appendChild(divJogo);
    });
}


