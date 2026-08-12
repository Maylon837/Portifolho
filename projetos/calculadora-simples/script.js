function Soma() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let calculo = (numero1 + numero2);
    document.getElementById("resultadosom").innerHTML = "A soma é<br>" + calculo
}

function subtracao() {
    let numero1 = parseFloat(document.getElementById("1numero").value);
    let numero2 = parseFloat(document.getElementById("2numero").value);
    let calculo = (numero1 - numero2);
    document.getElementById("resultadosub").innerHTML = "A subtração é<br>" + calculo
}

function multi() {
    let numero1 = parseFloat(document.getElementById("numero").value);
    let numero2 = parseFloat(document.getElementById("numero").value);
    let calculo = (numero1 * numero2);
    document.getElementById("multi").innerHTML = "A Multiplicação é<br>" + calculo
}

function adi() {
    let numero1 = parseFloat(document.getElementById("11numero").value);
    let numero2 = parseFloat(document.getElementById("22numero").value);
    let calculo = (numero1 / numero2);
    document.getElementById("caladi").innerHTML = "A Adição é<br>" + calculo.toFixed(2)
}

function pix() {
    let pagamento = parseFloat(document.getElementById("pagamento").value);
    let formapix = (document.getElementById("formapix").value);
    let valorFinal;
    let resultado = document.getElementById("pix")

    if (isNaN(pagamento) || pagamento <= 0) {
        resultado.innerHTML = "Por favor, insira um valor válido!";
        return;
    }

    switch (formapix) {
        case "10%":
            valorFinal = pagamento * 0.90;
            break;
        case "20%":
            valorFinal = pagamento * 0.80;
            break;
        case "30%":
            valorFinal = pagamento * 0.70
            break;
        case "40%":
            valorFinal = pagamento * 0.60
            break;
        case "50%":
            valorFinal = pagamento * 0.50
            break;
        case "60%":
            valorFinal = pagamento * 0.40
            break;
        case "70%":
            valorFinal = pagamento * 0.30
            break;
        case "80%":
            valorFinal = pagamento * 0.20
            break;
        case "90%":
            valorFinal = pagamento * 0.10
            break;
        case "99%":
            valorFinal = pagamento * 0.01
            break;
        default:
            resultado.innerText = "Forma de pagamento inválida!";
            return;
    }

    resultado.innerHTML = `Valor final a pagar; R$: ${valorFinal.toFixed(2)}`;

}