const calculo = (raio)=>{
    if (typeof raio !== 'number' || raio  <0){
        throw new Error ('O raio deve ser um número positivo');
    }
    return Math.PI * raio **2;
};

console.log(calculo(10));
console.log(calculo(5));
