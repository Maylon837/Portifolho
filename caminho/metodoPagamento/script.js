function calcularPagamento() {
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
    let formaPagamento = document.getElementById("formaPagamento").value;
    let valorFinal;
    let resultado = document.getElementById("resultado")

    if (isNaN(valorCompra) || valorCompra <= 0) {
        resultado.innerText = "Por favor, insira um valor válido!";
        return;
    }

    switch (formaPagamento) {
        case "pix":
            valorFinal = valorCompra * 0.90;
            break;
        case "debito":
            valorFinal = valorCompra * 0.95;
            break;
        case "credito":
            valorFinal = valorCompra;
            break;
        default:
            resultado.innerText = "Forma de pagamento inválida!";
            return;
    }

    resultado.innerText = `Valor final a pagar: R$ ${valorFinal.toFixed(2)}`;
}