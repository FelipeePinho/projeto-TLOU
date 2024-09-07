function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado. Digite o nome de um personagem.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Cria o HTML para cada item de resultado     
            resultados += `
            <div class="item-resultado"> 
                <div><h2>
                  <p>${dado.titulo}</p>
                </h2></div>
                <img class="imagem-redonda" src=${dado.imagem} class="foto" alt="Imagem de Joel Miller">
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
          </div>
        `;
        }      
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }