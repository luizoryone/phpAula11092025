// 1. Crie um array com pelo menos 10 elementos.
let aula = "Atividade Criando e Manipulando Arrays - 16/09/2025 - SENAI-DF SALA F09"
console.log(Date())
console.log(aula)
let aluno = "Luiz Oryone"

// lista dos filmes 2025 via internet
let filmes = [
  "A Batalha da Rua Maria Antônia",
  "Chico Bento e a Goiabeira Maraviósa",
  "The Naked Gun (2025)",
  "How to Train Your Dragon (live-action)",
  "Anaconda (2025)",
  "Capitão América: Admirável Mundo Novo",
  "Bridget Jones: Louca Pelo Garoto",
  "Nosferatu",
  "Covil de Ladrões 2",
  "The Monkey"
];

console.log("--- Array Original ---");
console.log(filmes);

// 2a. Exiba o primeiro e o último elemento.
console.log("\n--- Primeiro e Último Elemento ---");
console.log("Primeiro filme:", filmes[0]);
console.log("Último filme:", filmes[filmes.length - 1]);


// 2b. Substitua o terceiro elemento por um novo valor.
let novoFilme2ndIndex = "A volta dos que não foram."
filmes[2] = novoFilme2ndIndex;
console.log("\n--- Array com Terceiro Elemento Substituído ---");
console.log(filmes);

// 2c. Adicione um novo elemento ao final com .push().
filmes.push("Filme Adicional no Final");
console.log("\n--- Array com Elemento Adicionado no Final ---");
console.log(filmes);

// 2d. Remova o primeiro elemento com .shift().
filmes.shift();
console.log("\n--- Array com Primeiro Elemento Removido ---");
console.log(filmes);