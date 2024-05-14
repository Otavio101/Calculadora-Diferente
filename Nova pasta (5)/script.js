function numeros() {

    let num1 = document.getElementById("numero").value;
    let num2 = document.getElementById("numero2").value;
    let ordem = 0;

    const resultadoDiferença = num1 - num2;
    const resultadoDobroTriplo = (num1 * 2) + (num2 * 3);
    const resultadoMultiplicacao = num1 * num2;

console.log("A diferença entre o primeiro e o segundo numero é: ", resultadoDiferença);
console.log("A soma do dobro do primeiro numero com o triplo do segundo é: ", resultadoDobroTriplo);
console.log("O primeiro numero vezes o segundo numero resulta em: ", resultadoMultiplicacao);

if (num1 > num2) {
    ordem = [num1, num2];
    console.log("Variaveis do maior pro menor: ", num1 , num2);
} else {
    ordem = [num2, num1];
    console.log("Variaveis do maior pro menor: ", num2 , num1);
}

document.getElementById("resultados").innerHTML = 
        "<p>Diferença entre as duas variáveis: " + resultadoDiferença + "</p>" +
        "<p>O dobro da primeira variável mais o triplo da segunda variável: " + resultadoDobroTriplo + "</p>" +
        "<p>Multiplicação das duas variáveis: " + resultadoMultiplicacao + "</p>" +
        "<p>Variáveis maior e menor: " + ordem + "</p>";

}

function salarios() {

    let nome = document.getElementById("nome").value;
    let salarioBruto = document.getElementById("salarioBruto").value;
    let salarioLiquido = 0;
    let valorInss = 0.08;
    let inssDescontado = 0;

    inssDescontado = salarioBruto * valorInss;

    salarioLiquido = salarioBruto - inssDescontado;

    document.getElementById("resultados2").innerHTML = 
        "<p>Seu nome: " + nome + "</p>" +
        "<p>Seu salario bruto: " + salarioBruto + "</p>" +
        "<p>Seu salario liquido: " + salarioLiquido + "</p>" +
        "<p>O valor do INSS atualmente é de " + valorInss*100 +"%, e foi descuntado " + inssDescontado + " reais do seu salario.</p>";
}

function descontos() {
    let salario = document.getElementById("salario").value;
    let descontos = 0;

    if (salario <= 1000) {
        descontos = salario * 0.08
        document.getElementById("resultados3").innerHTML =
        "<p>Seu desconto é de "+ descontos + " reais.</p>"
    }
    if (salario > 1000 & salario <= 1500) {
        descontos = salario * 0.085
        document.getElementById("resultados3").innerHTML =
        "<p>Seu desconto é de "+ descontos + " reais.</p>"
    }
    if (salario > 1500) {
        descontos = salario * 0.09
        document.getElementById("resultados3").innerHTML =
        "<p>Seu desconto é de "+ descontos + " reais.</p>"
    }


}