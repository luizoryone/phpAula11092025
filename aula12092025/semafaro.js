
let titulo = "Aula 12.09.2025 - Estruturas de Decisão";
console.log(titulo);
let aluno = "Luiz Oryone";
let exericicio = `Exercício: Estruturas de Decisão

1. Sistema de Semáforo: Crie um programa que declare uma variável
corSemaforo e atribua a ela uma string ("verde", "amarelo" ou "vermelho").
Usando if , else if e else , imprima a ação que um motorista deve tomar:

"Siga em frente!" para verde.
"Atenção! Prepare-se para parar." para amarelo.
"Pare!" para vermelho.
"Cor inválida." para qualquer outra string. `;
console.log(aluno);
console.log(exericicio);

let corSemaforo = "verde"; // Escolhar: "verde", "amarelo" ou "vermelho"


if (corSemaforo === "verde") {
  console.log("Siga em frente!");
} else if (corSemaforo === "amarelo") {
  console.log("Atenção! Prepare-se para parar.");
} else if (corSemaforo === "vermelho") {
  console.log("Pare!");
} else {
  console.log("Cor inválida.");
}