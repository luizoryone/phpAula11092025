for (let fase =1; fase <=10; fase++){
    console.log(`Fase: ${fase}`);
    if(fase === 5){
        console.log("Fase 5 alcançada, saindo do loop."+fase);
        break
    }
}


for(let j =1; j<=100;j++){
    if(j % 2 !==0){
        j++;
        if(j %4==0)
            j +=4;
        console.log("Fase",j)
        continue;
}
};