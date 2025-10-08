function Soma() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let calculo = (numero1 + numero2);
    document.getElementById("resultadosom").innerHTML= "A soma é<br>" +calculo
}

function subtracao() {
    let numero1 = parseFloat(document.getElementById("1numero").value);
    let numero2 = parseFloat(document.getElementById("2numero").value);
    let calculo = (numero1 - numero2);
    document.getElementById("resultadosub").innerHTML= "A subtração é<br>" +calculo
}

function multi() {
    let numero1 = parseFloat(document.getElementById("numero").value);
    let numero2 = parseFloat(document.getElementById("numero").value);
    let calculo = (numero1 * numero2);
    document.getElementById("multi").innerHTML= "A Multiplicação é<br>" +calculo
}

function adi() {
    let numero1 = parseFloat(document.getElementById("11numero").value);
    let numero2 = parseFloat(document.getElementById("22numero").value);
    let calculo = (numero1 / numero2);
    document.getElementById("caladi").innerHTML= "A Adição é<br>" +calculo.toFixed(2)
}