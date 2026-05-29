function calcularMatematica() {
    let n1= Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let sinal = document.getElementById("operacao").value;
     let resultadoFinal = 0;

if (sinal === "+") {
    resultadoFinal = n1 + n2;
} else if (sinal === "-") {
    resultadoFinal = n1 - n2;
} else if (sinal === "*") {             
    resultadoFinal = n1 * n2;
} else if (sinal === "/") {
    resultadoFinal = n1 / n2;
}

document.getElementById("resultadoMat").innerText = "Resultado: " + resultadoFinal;
}

