

function saudar(nome){
    return `olá, ${nome}`
}
console.log(saudar("Luiz Lira"));


function Saudacao(nome,sobreNome){
    return `Olá, ${nome}. Conferir seu sobre nome: ${sobreNome}!`
}

let nome1 = "Luiz Oryone Moraes";
let sobreNome1 ="Moraes Lira";

console.log("Função Simples - de saudação: ",Saudacao(nome1,sobreNome1));

// Função Anonima

const dobro = function(numero){
    return numero * 2;
}
console.log("função Anônima - Valor dobrado :",dobro(5));

const Maior = function(valor,comparar){
    if(valor >= comparar){
        return `${valor} é MAIOR que ${comparar}`
    }
    return `${valor} é MENOR que ${comparar} Tipo:${typeof(valor)} `
}

console.log("Função Anônima: Maior",Maior(10,null))

const tripo = function(valorTriplo){
    return `Função Anônima: ${valorTriplo * 3} `
}
console.log(tripo(10));

