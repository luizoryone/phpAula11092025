let contadorEnergetico = 1; 
let limiteEnergetico = 1024;
console.log(contadorEnergetico);
console.log(limiteEnergetico);

while (contadorEnergetico <= limiteEnergetico) {
    contadorEnergetico *= 2;
    console.log(contadorEnergetico);
}

console.log(`Ciclo: ${contadorEnergetico} Energia: ${limiteEnergetico}`);


let contEnergia =1;
let ciclo =1;
do{
    console.log(`Ciclo ${ciclo} Energia: ${contEnergia}`);
    contEnergia *= 2;
    ciclo++
}
while(contEnergia <= 1024){
    console.log(`${contEnergia}`);
}