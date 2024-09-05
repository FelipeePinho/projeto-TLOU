function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Cria o HTML para cada item de resultado
      resultados += `
        <div class="item-resultado"> 
          <h2>
            <p>${dado.titulo}</p>
          </h2>
          <img class="imagem-redonda" src=${dado.imagem} class="foto" alt="Imagem de Joel Miller">
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Saiba mais</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }