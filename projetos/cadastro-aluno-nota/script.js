var alunos = [];


function cadastrar() {
    var nome = document.getElementById("nome").value;
    var nota = parseFloat(document.getElementById("nota").value);

    
    if (nome == "" || isNaN(nota)) {
        alert("Por favor, preencha o nome e a nota corretamente.");
    } else {
        
        // teste para aprovado e reprovado
        var situacao = "";
        if (nota >= 7) {
            situacao = "Aprovado";
        } else {
            situacao = "Reprovado";
        }

        var aluno = {
            nome: nome,
            nota: nota,
            situacao: situacao
        };
        alunos.push(aluno);

        exibirAlunos(alunos);

        document.getElementById("nome").value = "";
        document.getElementById("nota").value = "";
    }
}

// função para exibir a tela dos alunos no site
function exibirAlunos(listaParaExibir) {
    var containerResultado = document.getElementById("resultado");
    
    
    containerResultado.innerHTML = "<h3>Resultados:</h3>"; 
    
    
    for (var contador = 0; contador < listaParaExibir.length; contador = contador + 1) { 
        var alunoAtual = listaParaExibir[contador];
        
        var classeCSS = "";
        if (alunoAtual.situacao == "Aprovado") {
            classeCSS = "aluno-aprovado";
        } else {
            classeCSS = "aluno-reprovado";
        }
        //container para armarzenar dados dos alunos
    containerResultado.innerHTML += '<div class="' + classeCSS + '">' + 
                                        alunoAtual.nome + " - Nota: " + alunoAtual.nota + " (" + alunoAtual.situacao + ')' +
                                        '</div>';
    }
}

// função para filtrar os dados dos alunos
function filtrarAprovados() {
    var aprovados = [];
    
    for (var contador = 0; contador < alunos.length; contador = contador + 1) {
        if (alunos[contador].situacao == "Aprovado") {
            aprovados.push(alunos[contador]);
        }
    }
    //o push coloca os dados dos alunos na lista alunos [] 
    exibirAlunos(aprovados);
}

function mostrarTodos() {
    exibirAlunos(alunos);
}
