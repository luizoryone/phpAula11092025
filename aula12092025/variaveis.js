let nome = "Luiz Oryone";
let sobreNome = "Moraes Lira";
let saudacao = `Olá, ${nome}. Conferir seu sobre nome: ${sobreNome}!`
console.log(saudacao);


let idade = 25;
let preco = 19.99;

console.log(idade);
console.log(preco);

let soma = idade + preco;
let subtracao = idade - 5;
let multiplicar = preco * 2;
let dividir = idade / 5;
let modulo = idade %5;

console.log(soma,subtracao,multiplicar,dividir,modulo)


let nota = 45;

if(nota >= 70)
{
    console.log("Aprovado");
} 
else if(nota >=50)
{
    console.log("Recuperação");
} 
else
{
    
    console.log("Reprovado");
}

