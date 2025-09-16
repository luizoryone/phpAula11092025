let temperaturas = [14.5,14.8,16.0,18.0,19.5,19.9,21.5,23.0,24.5,29.0,31.5,32.7,34.0,34.7,35.2,33.0,30.0,27.0,23.0,19.0,18.2,16.7,15.8,15.1,14.2];

let frio = 20;
let agradável = 29;
let quente = 30;

for(let i in temperaturas) {
    let temp = temperaturas[i];
    console.log(`Hora ${i}: ${temp}°C`);
    if(temp < frio){
        console.log("A temperatura é classificada como 'Frio'");
    } else if(temp >= frio && temp < quente){
        console.log("A temperatura é classificada como 'Agradável'");
    } else {
        console.log("A temperatura é classificada como 'Quente'");
    }
}

