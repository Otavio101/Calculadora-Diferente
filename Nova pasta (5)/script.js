function numeros() {

    let num1 = document.getElementById("numero").value;
    let num2 = document.getElementById("numero2").value;

    const resultadoDiferença = num1 - num2;
    const resultadoDobroTriplo = (num1 * 2) + (num2 * 3)
    const resultadoMultiplicacao = num1 * num2

if (num1 > num2) {
    console.log("Variaveis do maior pro menor: ", num1, num2);
} else {
    console.log("Variaveis do maior pro menor: ", num1, num2);
}

console.log("A diferença entre o primeiro e o segundo numero é: ", resultadoDiferença);
console.log("A soma do dobro do primeiro numero com o triplo do segundo é: ", resultadoDobroTriplo);
console.log("O primeiro numero vezes o segundo numero resulta em: ", resultadoMultiplicacao);
console.log("A variavel menor é ",)

document.getElementById("resultado").innerHTML = 
        "<p>Diferença entre as duas variáveis: " + resultadoDiferença + "</p>" +
        "<p>O dobro da primeira variável mais o triplo da segunda variável: " + resultadoDobroTriplo + "</p>" +
        "<p>Multiplicação das duas variáveis: " + resultadoMultiplicacao + "</p>" +
        "<p>Variáveis em ordem decrescente: " + ordem + "</p>";

}

