function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    if (!campoPesquisa) {
      section.innerHTML = "<p>Campo de pesquisa vazio</p>"; //Caso seja realizada a pesquisa com o campo vazio
      return;
    }
  
    let resultados = "";
  
    for (let dado of dados) {  
      titulo = dado.titulo.toLowerCase(); //O texto pesquisado se torna um padrão para melhorar a usabilidade do usuário
      pesquisador = dado.pesquisador.toLowerCase(); //O texto pesquisado se torna um padrão para melhorar a usabilidade do usuário
      status = dado.status.toLowerCase(); //O texto pesquisado se torna um padrão para melhorar a usabilidade do usuário
      descricao = dado.descricao.toLowerCase(); //O texto pesquisado se torna um padrão para melhorar a usabilidade do usuário
      tags = dado.tags.toLowerCase(); //O texto pesquisado se torna um padrão para melhorar a usabilidade do usuário
  

      if (campoPesquisa.length > 1 && (titulo.includes(campoPesquisa) || pesquisador.includes(campoPesquisa) || status.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))) { // Configuração do campo de pesquisa 
        resultados += `
                <div class="item-resultado">
                <h2><a href="https://youtu.be/NJbdsCzj1VI?si=zzvux1S3QVl9p3za" target="_blank">${dado.titulo}</a></h2>
                    <p class="decricao meta">Pesquisador: ${dado.pesquisador}</p>
                    <p class="decricao meta">Status: ${dado.status}</p>
                    <p class="decricao meta">Descrição: ${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
        `;
      }
    }
  
    if (!resultados) {
      resultados = "<p>Dados não encontrados</p>"; //Caso seja realizada a pesquisa sem os dados presentes
    }
  
    section.innerHTML = resultados;
  }

