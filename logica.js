// let numero = parseInt(prompt("Digite um número de 1 a 3:"));
// switch (numero) {
//     case 1:
//         alert("Um");
//         break;
//     case 2:
//         alert("Dois");
//         break;
//     case 3:
//         alert("Três");
//         break;
//     default:
//         alert("Número inválido. Digite um número entre 1 e 3.");
// }
 
// **************************** segundo topico

// let numero = parseInt(prompt("Digite um número:"));
// if (numero > 10) {
//     alert("O número é maior que 10.");
// } else {
//     alert("O número não é maior que 10.");
// }

// **************************** terceiro topico

// let dia = parseInt(prompt("Digite um número de 1 a 7 para o dia da semana:"));
// let nomeDia;
// switch (dia) {
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda-feira";
//         break;
//     case 3:
//         nomeDia = "Terça-feira";
//         break;
//     case 4:
//         nomeDia = "Quarta-feira";
//         break;
//     case 5:
//         nomeDia = "Quinta-feira";
//         break;
//     case 6:
//         nomeDia = "Sexta-feira";
//         break;
//     case 7:
//         nomeDia = "Sábado";
//         break;
//     default:
//         nomeDia = "Número inválido. Digite um número entre 1 e 7.";
// }
// alert(nomeDia);

// **************************** quarto topico

// let cor = prompt("Digite uma cor (vermelho, verde, azul):").toLowerCase();
// switch (cor) {
//     case "vermelho":
//         alert("Você escolheu a cor vermelha!");
//         break;
//     case "verde":
//         alert("Você escolheu a cor verde!");
//         break;
//     case "azul":
//         alert("Você escolheu a cor azul!");
//         break;
//     default:
//         alert("Cor inválida.");
// }

// **************************** quinto topico

// let num1 = parseInt(prompt("Digite o primeiro número:"));
// let num2 = parseInt(prompt("Digite o segundo número:"));

// if (num1 % 2 === 0 && num2 % 2 === 0) {
//     alert("Ambos os números são pares.");
// } else {
//     alert("Pelo menos um dos números não é par.");
// }

// **************************** sexto topico

// let operacao = prompt("Digite a operação (+, -, *, /):");
// let num1 = parseFloat(prompt("Digite o primeiro número:"));
// let num2 = parseFloat(prompt("Digite o segundo número:"));
// let resultado;

// switch (operacao) {
//     case "+":
//         resultado = num1 + num2;
//         break;
//     case "-":
//         resultado = num1 - num2;
//         break;
//     case "*":
//         resultado = num1 * num2;
//         break;
//     case "/":
//         if (num2 !== 0) {
//             resultado = num1 / num2;
//         } else {
//             alert("Divisão por zero não permitida.");
//             break;
//         }
//         break;
//     default:
//         alert("Operação inválida.");
//         break;
// }
// if (resultado !== undefined) {
//     alert("Resultado: " + resultado);
// }

// **************************** setimo topico

// let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));
// if (nota <= 4.9) {
//     alert("Baixa");
// } else if (nota >= 5 && nota <= 6.9) {
//     alert("Média");
// } else if (nota >= 7 && nota <= 10) {
//     alert("Alta");
// } else {
//     alert("Nota inválida.");
// }

// **************************** oitavo topico

// let estadoCivil = prompt("Qual é o seu estado civil? (solteiro, casado, divorciado, viúvo):").toLowerCase();
// switch (estadoCivil) {
//     case "solteiro":
//         alert("Você é solteiro.");
//         break;
//     case "casado":
//         alert("Você é casado.");
//         break;
//     case "divorciado":
//         alert("Você é divorciado.");
//         break;
//     case "viúvo":
//         alert("Você é viúvo.");
//         break;
//     default:
//         alert("Estado civil inválido.");
// }

// **************************** nono topico

// let numero = parseInt(prompt("Digite um número:"));
// if (numero % 2 === 0) {
//     alert("O número é par.");
// } else {
//     alert("O número é ímpar.");
// }

// **************************** decimo topico

// let idade = parseInt(prompt("Digite sua idade:"));
// if (idade >= 18) {
//     alert("Você é maior de idade.");
// } else {
//     alert("Você é menor de idade.");
// }

function verificaParImpar(){
    const numero1 = parseInt(prompt('informe o numero'))
    if (numero1 % 2 == 1){
        console.log('seu numero é impar')
    }else {
        console.log('seu numero é par ')
    }

}