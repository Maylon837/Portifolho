function calcularMedia() {
    // Captura os valores digitados
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let resultado = document.getElementById("resultado")
    
    // Verifica se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) { 
        resultado.innerText = "Por favor, preencha todas as notas!";
    }
    
    else if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
        resultado.innerText = "Por favor, insira notas maiores que 0";;
    }
    
    else if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        resultado.innerText = "Por favor, insira notas menores que 10";
    }
    
    else {
        
        // Calcula a média
        let media = (nota1 + nota2 + nota3) / 3;
        let status;
        
        // Define o status do aluno
        if (media >= 7) {
            status = "Aprovado ✅";
        } else if (media >= 5) {
            status = "Recuperação ⚠️";
        } else {
            status = "Reprovado ❌";
        }
        
        // Exibe o resultado na página
        resultado.innerText = `Média: ${media.toFixed(2)} - Situação: ${status}`;
    }
}
